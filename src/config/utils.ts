// import { deepEqual, isEmpty } from "./constant";

// Utility function
export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array]; // Create copy to avoid mutation
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// More robust helper functions
const isEmpty = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) return true;
    return false;
};

const normalizeValue = (value: any): any => {
    // Handle Date objects and date strings
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)) {
        try {
            return new Date(value).toISOString();
        } catch {
            return value;
        }
    }
    return value;
};

const deepEqual = (a: any, b: any): boolean => {
    // Normalize values for comparison
    const normalA = normalizeValue(a);
    const normalB = normalizeValue(b);
    
    if (normalA === normalB) return true;
    
    if (normalA == null || normalB == null) return normalA === normalB;
    
    if (Array.isArray(normalA) && Array.isArray(normalB)) {
        if (normalA.length !== normalB.length) return false;
        return normalA.every((item, index) => deepEqual(item, normalB[index]));
    }
    
    if (typeof normalA === 'object' && typeof normalB === 'object' && !Array.isArray(normalA) && !Array.isArray(normalB)) {
        // **SMART OBJECT COMPARISON**: Only compare fields that exist in the original
        const keysA = Object.keys(normalA);
        const keysB = Object.keys(normalB);
        
        // Check if B has any new non-empty keys
        const newKeysInB = keysB.filter(key => !keysA.includes(key) && !isEmpty(normalB[key]));
        if (newKeysInB.length > 0) return false;
        
        // Check existing keys
        return keysA.every(key => {
            if (!(key in normalB)) return isEmpty(normalA[key]);
            return deepEqual(normalA[key], normalB[key]);
        });
    }
    
    return false;
};

export const getChangedFields = <T extends Record<string, any>>(
    originalData: T, 
    updatedData: T
): Partial<T> => {
    const result: Partial<T> = {};

    // **Clean updated data first** - remove dot notation and system fields
    const cleanUpdatedData = { ...updatedData };
    const systemFields = ['__v', 'createdAt', 'updatedAt'];
    const dotNotationFields: string[] = [];

    // Remove system fields and collect dot notation fields
    Object.keys(cleanUpdatedData).forEach(key => {
        if (key.includes('.')) {
            dotNotationFields.push(key);
            delete cleanUpdatedData[key];
        }
        if (systemFields.includes(key)) {
            delete cleanUpdatedData[key];
        }
    });

    // console.log('Dot notation fields found:', dotNotationFields);
    // console.log('System fields removed:', systemFields.filter(f => f in updatedData));

    // **Compare clean data**
    for (const key in cleanUpdatedData) {
        if (!cleanUpdatedData.hasOwnProperty(key)) continue;
        
        const updatedValue = cleanUpdatedData[key];
        const originalValue = originalData[key];

        // Skip truly empty values
        if (isEmpty(updatedValue)) continue;

        // **Special handling for new fields**
        if (originalValue === undefined) {
            // Only include if the new value is not empty
            if (!isEmpty(updatedValue)) {
                // console.log(`New field detected: ${key} = ${JSON.stringify(updatedValue)}`);
                result[key] = updatedValue;
            }
            continue;
        }

        // **Compare existing fields**
        if (!deepEqual(originalValue, updatedValue)) {
            // console.log(`Field changed: ${key}`);
            // console.log(`  Original: ${JSON.stringify(originalValue)}`);
            // console.log(`  Updated:  ${JSON.stringify(updatedValue)}`);
            result[key] = updatedValue;
        }
    }

    // console.log('Final changed fields:', Object.keys(result));
    return result;
};

