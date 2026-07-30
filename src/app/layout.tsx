import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Shweta Jadhav | Graphic Designer & Visual Storyteller",
  description:
    "Shweta Jadhav is a Pune-based graphic designer specialising in luxury brand identity, UI/UX, illustration, and social media design.",
  keywords: ["graphic designer", "brand identity", "Pune", "Shweta Jadhav", "logo design", "UI UX"],
  openGraph: {
    title: "Shweta Jadhav | Graphic Designer & Visual Storyteller",
    description: "Luxury portfolio of Shweta Jadhav — Graphic Designer based in Pune, India.",
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
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}