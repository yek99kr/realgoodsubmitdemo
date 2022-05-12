import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-16 ">
        {/* <h2 className="text-2xl mb-6">Products</h2> */}

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  ">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>

      {/* background */}
      <div className="fixed top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh] z-[-10]"></div>
    </>
  );
};

export default ProductList;
