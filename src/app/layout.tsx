import type { Metadata } from "next";
import { Anuphan, Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcedion",
  description: "We Build Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anuphan.variable} antialiased`}
      >
        <Header />
        {/* Add padding-top to account for fixed header height (121px) */}
        <div className="px-4 md:px-8 lg:px-[180px] pt-[80px] lg:pt-[121px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
