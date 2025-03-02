import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dbConfig } from "@/utils/dbConfig";
import StoreProvider from "./global/storeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConfig();
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
