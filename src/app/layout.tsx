import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import "./styles/site.scss";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { AppProvider } from "../AppContext";
//change google fonts
//const inter = Inter({ subsets: ["latin"] });

//Clerk
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
//add components
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <AppProvider>{children}</AppProvider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
