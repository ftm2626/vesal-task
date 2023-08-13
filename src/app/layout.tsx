import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/utils/provider";

export const metadata: Metadata = {
  title: "وصال گشت رهام",
  description: "this is a test app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body><Providers>{children}</Providers></body>
    </html>
  );
}
