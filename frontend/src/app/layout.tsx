import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Progress_bar from "./components/progressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo-app",
  description: "Todo-app for taking notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 style={{fontWeight:'bolder', fontSize: '2.5em' }}>ToDo Tasks</h1>
        </header>
        {/* <Progress_bar progress={10}/> */}
        {children}
        {/* <footer>main footer here</footer> */}
      </body>
    </html>
  );
}
