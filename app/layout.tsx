
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First Next.js App",
  description: "Mary Clier Mediano - BSIT Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
