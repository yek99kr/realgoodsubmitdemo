import "../styles/globals.css";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import ShopProvider from "../context/shopContext";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <SEO />
      <ShopProvider>
        {/* <Nav /> */}
        {/* <AnimateSharedLayout type="crossfade">
          <AnimatePresence> */}
        <Component {...pageProps} key={router.asPath} router={router} />
        {/* </AnimatePresence>
        </AnimateSharedLayout> */}
      </ShopProvider>

      <div className="fixed top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh] z-[-100]"></div>
    </>
  );
}

export default MyApp;
