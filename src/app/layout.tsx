import GoogleAnalytics from "@/lib/GoogleAnalytics";
import "./globals.css";

export const metadata = {
  title: "WordsBingo",
  description:
    "Discover the thrill of WordsBingo! Turn words into wins in a unique twist on classic bingo. #WordsBingo #WordFun",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "WordsBingo,Bingo,react,davidthesousa, typescript, project",
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
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JL3149DC93" />
      <body>{children}</body>
    </html>
  );
}
