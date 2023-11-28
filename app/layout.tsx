import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

// components

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next app",
  description: "Building future for everyone!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <nav>
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
