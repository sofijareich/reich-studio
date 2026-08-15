import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://reichstudio.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
