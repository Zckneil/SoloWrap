'use client'

import { useState, useEffect } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import PasswordScreen from "@/components/common/PasswordScreen";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem('solowrap_authenticated') === 'true';
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}>
      <head>
        <title>SoloWrap - One-Handed Medical Dressing Applicator</title>
        <meta name="description" content="Revolutionary self-cutting bandage dispenser for quick, sterile wound coverage with one hand" />
        <meta name="keywords" content="medical device, wound care, bandage dispenser, one-handed, sterile dressing" />
      </head>
      <body className="h-full bg-secondary-50 text-secondary-900 antialiased">
        {!isLoading && (
          <>
            {!isAuthenticated ? (
              <PasswordScreen onAuthenticated={handleAuthenticated} />
            ) : (
              <>
                <Navigation />
                <main className="min-h-screen pt-16">
                  {children}
                </main>
                <Footer />
              </>
            )}
          </>
        )}
      </body>
    </html>
  );
}
