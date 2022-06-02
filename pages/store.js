import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";
import { motion } from "framer-motion";

const products = ({ products, router }) => {
  return (
    <>
      <motion.div
        layout
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProductList products={products} />
      </motion.div>
    </>
  );
};

export default products;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
