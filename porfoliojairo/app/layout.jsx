import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "/components/Header";
import PageTransition from "/components/PageTransition";
import { motion as m } from "framer-motion";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Portfolio de desarrollador Jairo2santos",
  description: "Desarrollo de interfases modernas y SEO friendly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
