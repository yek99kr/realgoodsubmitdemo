import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

const products = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
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
