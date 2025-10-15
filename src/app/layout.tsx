import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { AnalyticsProvider } from "@/providers/analytics-provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ridipt Technologies",
  description: "Ridipt Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased p-0 m-0`}
      >
        <Suspense 
          // fallback={<>Loading...</>}
        >

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          // disableTransitionOnChange
          >
            <AnalyticsProvider>
              <Navbar />
              {children}
              <Footer />
            </AnalyticsProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html >
  );
}
