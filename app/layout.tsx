import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAVÉRA — Elegance Born From Depth",
  description:
    "Timeless pieces designed to bring out the best in you, for every moment, in every way.",
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