import { getAllProducts, getProduct } from "../../../lib/shopify";
import ProductDetail from "../../../components/ProductDetail";
import { motion } from "framer-motion";

export default function ProductPage({ product, router }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductDetail product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
