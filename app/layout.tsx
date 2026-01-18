import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Masti Patel | Portfolio",
  description: "Full-stack engineer with AI & DevOps expertise.",
  icons: {
    icon: "/favicon.svg", // Path to favicon
    shortcut: "/favicon.svg",
    apple: "/favicon.svg", // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        {children}
      </body>
    </html>
  );
}
