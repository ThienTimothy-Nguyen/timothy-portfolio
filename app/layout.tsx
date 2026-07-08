import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voiceprint AI",
  description: "Analyze writing consistency, tone, style, and brand voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header />
          <div className="overflow-scroll min-h-screen">
            {children}
          </div>
          <Footer />
          
      </body>
    </html>
  );
}