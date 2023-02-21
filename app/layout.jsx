import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`mx-4 md:mx-48 lg:mx-96 ${roboto.subsets}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
