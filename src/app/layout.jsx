import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../../lib/AntdRegistry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "DELPHICOM",
  },
  description:
    "050,0507,콜멘트,어플사업자 제공,직방,배달통,요기요,야놀자,실시간콜로그,통화내역,녹취,배달앱,카수리.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon_48.png",
      href: "/favicon_48.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon_48.png",
      href: "/favicon_48.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
