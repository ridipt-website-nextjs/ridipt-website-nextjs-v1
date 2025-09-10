'use server';
import { cookies } from "next/headers";


export const setCookie = async (key: string, token: string) => {
    try {
        const cookieStore = await cookies();
        // console.log(token)
        cookieStore.set(key, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            // Set an expiration date if needed
            // maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        return true
    } catch (error) {
        console.error('Error setting cookie:', error)
        return false
    }
}

export const getCookie = async (key: string) => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(key);
    if (cookie) {
        return cookie.value
    }
    return undefined
}

// Function to verify if the current user is an Admin
export const isAdminUser = async (): Promise<boolean> => {
    try {
        // Get token from cookies
        const token = await getCookie("adminToken");

        if (!token) {
            console.warn("No admin token found in cookies");
            return false; // No token means not an admin
        }

        // Call API to verify admin token
        const res = await fetch(`${process.env.APP_URL}/api/verify-admin-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Tell server we are sending JSON
            },
            body: JSON.stringify({ token }), // Send token in request body
        });

        if (!res.ok) {
            throw new Error("Failed to verify admin token");
        }
        // Parse API response
        const data: { isValid: boolean } = await res.json();

        return data.isValid; // true if token is valid, false otherwise
    } catch (error) {
        console.error("Error verifying admin user:", error);
        return false; // On error, assume not an admin
    }
};
