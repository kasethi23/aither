import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGENTWATCH | Security and Observability for AI Agents",
  description:
    "AGENTWATCH helps security and engineering teams model AI agents, understand access paths, and investigate failures across tools, identities, systems, and data."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
