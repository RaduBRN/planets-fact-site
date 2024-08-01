import "./globals.css";
import { League_Spartan, Antonio } from "next/font/google";
import Navbar from "@/components/Navbar";
import ColorClasses from "@/components/ColorClasses";

export const metadata = {
  title: "Planet Fact Site",
  description: "Planet fact site created with NextJS",
};

const spartan = League_Spartan({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-spartan",
});

const antonio = Antonio({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-antonio",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${spartan.variable} ${antonio.variable}`} lang="en">
      <body className="font-spartan bg-darkblue bg-[url('/assets/background-stars.svg')] bg-cover bg-no-repeat">
        <ColorClasses />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
