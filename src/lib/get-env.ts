'use server';

export const getFirebaseConfig = async (): Promise<string | null> => {
    const data = process.env.FIREBASE_CONFIG;
    if (!data) {
        console.warn('[firebase] FIREBASE_CONFIG env var is not set — Firebase Analytics will be disabled.');
        return null;
    }
    return data;
}