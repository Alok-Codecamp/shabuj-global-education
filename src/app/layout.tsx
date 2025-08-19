import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shabuj Global Education",
  description: "Shabuj Global Education helps students study abroad with expert guidance on university admission, visa support, scholarships, and career success.",
  openGraph:{
     description:
      "Learn about Shabuj Global Education, our mission, history, and student support services.",
    url: "https://shabuj-global-education.vercel.app/",
    siteName: "Shabuj Global Education",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
