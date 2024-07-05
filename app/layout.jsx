import { Rubik } from "next/font/google";
import "./globals.css";

//Components
import NavBar from "./Components/NavBar";

const font = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "David Avila Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}</body>
    </html>
  );
}
