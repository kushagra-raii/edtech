import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import StoreProvider from "@/app/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" min-w-[100%]  ">
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}
