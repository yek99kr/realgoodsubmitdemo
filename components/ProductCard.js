import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;
  return (
    <Link href={`/store/products/${handle}`}>
      <a className="group thumbcursor">
        <div className="w-full rounded-3xl overflow-hidden ">
          <div className="relative group-hover:opacity-75 h-72 ">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
        <h3 className="mt-4 text-lg ">{title}</h3>
        <p className="mt-1 text-sm">{formatter.format(price)}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
