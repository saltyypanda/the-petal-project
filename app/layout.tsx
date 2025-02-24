import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Petal Project",
  description: "A website to pair with the Petal app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="petal" lang="en">
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
