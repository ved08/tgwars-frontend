import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientThemeWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Agent Telegram Bot",
  description: "Your intelligent assistant on Telegram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientThemeWrapper>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
