import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yamindo - Yayasan Yasir Amin Indonesia",
  description:
    "Yayasan Yasir Amin Indonesia (Yamindo) adalah lembaga nonprofit yang berkomitmen untuk memberdayakan masyarakat Indonesia melalui pendidikan, kesehatan, dan bantuan sosial.",
  keywords: [
    "Yamindo",
    "Yayasan Yasir Amin Indonesia",
    "nonprofit",
    "yayasan",
    "donasi",
    "kemanusiaan",
    "pendidikan",
    "kesehatan",
    "Indonesia",
  ],
  authors: [{ name: "Yamindo" }],
  openGraph: {
    title: "Yamindo - Yayasan Yasir Amin Indonesia",
    description:
      "Bersama membangun Indonesia yang lebih baik melalui pendidikan, kesehatan, dan bantuan sosial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
