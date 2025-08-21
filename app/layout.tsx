import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { MathJaxContext } from "better-react-mathjax";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "maths-formulae-repository",
  description: "mathematics formulae repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className={`antialiased`}>
        <Header />
        <MathJaxContext>{children}</MathJaxContext>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
