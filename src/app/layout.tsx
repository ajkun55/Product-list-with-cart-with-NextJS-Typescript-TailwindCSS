import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const rht = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Product list with cart",
  description: "Frontend Mentor | Product list with cart using Next JS",
  icons: {
    icon: "/favicon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rht.className}>{children}</body>
    </html>
  );
}
