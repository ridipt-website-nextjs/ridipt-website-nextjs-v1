// Import the functions you need from the SDKs you need
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./lib/get-env";

// Initialize Firebase lazily
let firebaseApp: FirebaseApp | null = null;
let analytics: Analytics | null = null;

// Initialize Firebase app
export const getFirebaseApp = async (): Promise<FirebaseApp | null> => {
  if (firebaseApp) return firebaseApp;

  try {
    const configString = await getFirebaseConfig();
    if (!configString) return null;

    const firebaseConfig = JSON.parse(configString);
    firebaseApp = initializeApp(firebaseConfig);
    return firebaseApp;
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    return null;
  }
};

// Get Analytics instance (client-side only)
export const getFirebaseAnalytics = async (): Promise<Analytics | null> => {
  if (typeof window === "undefined") return null;
  if (analytics) return analytics;

  try {
    const supported = await isSupported();
    if (!supported) return null;

    const app = await getFirebaseApp();
    if (!app) return null;

    analytics = getAnalytics(app);
    return analytics;
  } catch (error) {
    console.error('Failed to initialize Firebase Analytics:', error);
    return null;
  }
};