import "../styles/globals.css";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import ShopProvider from "../context/shopContext";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      {/* <AnimatePresence> */}
      <div>
        <SEO />
        <Nav />

        <Component {...pageProps} key={router.asPath} />
      </div>
      {/* </AnimatePresence>{" "} */}
    </ShopProvider>
  );
}

export default MyApp;
