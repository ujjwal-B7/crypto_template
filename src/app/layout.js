import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto App",
  description: "crypto trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
