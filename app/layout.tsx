import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Widget",
  description: "GitHub README widget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}