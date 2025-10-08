'use server';

export const getFirebaseConfig = async () => {
    const data = process.env.FIREBASE_CONFIG;
    if (!data) {
        throw new Error('FIREBASE_CONFIG is not defined');
    }
    return data || '{}';
}