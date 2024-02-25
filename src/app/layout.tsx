import Head from "next/head";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "WordsBingo",
  description:
    "Discover the thrill of WordsBingo! Turn words into wins in a unique twist on classic bingo. #WordsBingo #WordFun",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "WordsBingo,Bingo,react ,davidthesousa, typescript, project",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-JL3149DC93" />
        <link rel="icon" sizes="16x16" href="../app/assets/favicon.ico" />
      </Head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JL3149DC93" />
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
