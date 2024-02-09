import Footer from "../components/footer";
import GoogleAnalytics from "../lib/GoogleAnalytics";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JL3149DC93" />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
