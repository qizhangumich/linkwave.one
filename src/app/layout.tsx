import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "linkwave.one",
  description: "An exploration-driven, cross-border opportunity connector.",
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
