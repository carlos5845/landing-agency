import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STANCOF",
  description: "Landing page ",
  icons: {
    icon: "/logostatcont.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${space_grotesk.className} ${inter.variable} ${space_grotesk.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
