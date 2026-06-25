import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Implant | Rəqəmsal İmplantologiya Bakı",
    template: "%s | Digital Implant",
  },
  description:
    "Bakıda rəqəmsal implantologiya mərkəzi. 3Shape Implant Studio ilə rəqəmsal planlaşdırma, rehberli cərrahiyyə, statik cərrahi şablonlar. Dr. Bakhtiyar Aliyev.",
  metadataBase: new URL("https://digitalimplant.az"),
  openGraph: {
    siteName: "Digital Implant",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
