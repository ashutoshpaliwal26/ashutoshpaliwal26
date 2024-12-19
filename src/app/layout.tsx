import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior : "smooth"}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 h-screen`}
      >
        <NavigationBar/>
        <main className=" max-w-full w-screen flex justify-center items-center">
        {children}
        </main>
      </body>
    </html>
  );
}
