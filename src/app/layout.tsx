// placeholder
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ANZZZ SMS GATEWAY",
  description: "Modern SMS Inbox Gateway Dashboard"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}