import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Biryani ByHearts - Authentic Lucknowi Biryani",
    template: "%s | Biryani ByHearts",
  },
  description:
    "Experience the authentic taste of Lucknowi biryani, slow-cooked dum biryani with traditional spices.",
  keywords: ["biryani", "Lucknowi", "Awadhi", "dum biryani", "restaurant", "Indian food"],
  authors: [{ name: "Biryani ByHearts" }],
  openGraph: {
    title: "Biryani ByHearts - Authentic Lucknowi Biryani",
    description: "Experience the authentic taste of Lucknowi biryani, slow-cooked dum biryani.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
