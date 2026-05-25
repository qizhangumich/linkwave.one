import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LINKWAVE PTE. LTD. — AI Applications, Software & Technology Consulting",
    template: "%s | LINKWAVE PTE. LTD.",
  },
  description:
    "LINKWAVE PTE. LTD. is a Singapore-based technology and consulting company focused on AI applications, mobile and software development, and cross-border digital business solutions.",
  metadataBase: new URL("https://linkwave.one"),
  openGraph: {
    title: "LINKWAVE PTE. LTD.",
    description:
      "Singapore-based technology and consulting company building AI-powered digital applications and software solutions.",
    url: "https://linkwave.one",
    siteName: "LINKWAVE PTE. LTD.",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
