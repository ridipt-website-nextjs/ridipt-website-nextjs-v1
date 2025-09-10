// 'use server'

import { getCookie } from "./helper-functions";

class AdminApiClient {
    private baseURL: string;
    constructor(url: string) {
        // Fallback value provide करें
        const baseUrl = process.env.APP_URL || 'http://localhost:3000';
        this.baseURL = `${baseUrl}/api${url}`;
        console.log(this.baseURL);
    }


    private async request(endpoint: string, options: RequestInit = {}) {
        // Cookie 
        const token = await getCookie('adminToken');

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            ...(options.headers as Record<string, string> || {}),
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${this.baseURL}${endpoint}`, {
            ...options,
            headers,
            credentials: "include", // cookie भी जाएगी
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    }

    public get(endpoint: string) {
        return this.request(endpoint, { method: "GET" });
    }

    public post(endpoint: string, body: any) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    }

    public put(endpoint: string, body: any) {
        return this.request(endpoint, {
            method: "PUT",
            body: JSON.stringify(body),
        });
    }

    public delete(endpoint: string) {
        return this.request(endpoint, { method: "DELETE" });
    }
}
export const adminApi = new AdminApiClient('/admin');


export default AdminApiClient