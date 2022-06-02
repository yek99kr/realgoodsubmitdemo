import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const [moveImg, setMoveImg] = useState(0);
  const { altText, originalSrc } = product.node.images.edges[moveImg].node;

  const price = product.node.priceRange.minVariantPrice.amount;
  return (
    <Link href={`/store/products/${handle}`}>
      <a className="group thumbcursor">
        <div className="w-full overflow-hidden ">
          <div
            className="relative h-80 w-80 drop-shadow-lg"
            onMouseMove={(e) => {
              var rect = e.target.getBoundingClientRect();
              var x = e.clientX - rect.left;

              var percent = (rect.width * 25) / 100;

              if (product.node.images.edges[1]) {
                if (moveImg !== 0 && x > 0 && x < percent) {
                  setMoveImg(0);
                } else if (
                  moveImg !== 1 &&
                  x > percent &&
                  x < percent + percent
                ) {
                  setMoveImg(1);
                } else if (
                  moveImg !== 2 &&
                  x > rect.width - percent - percent &&
                  x < rect.width - percent
                ) {
                  setMoveImg(2);
                } else if (
                  moveImg !== 3 &&
                  x > rect.width - percent &&
                  x < rect.width
                ) {
                  setMoveImg(3);
                }
              }

              // if (product.node.images.edges[moveImg + 1] && moveImg < 3) {
              //   setMoveImg(moveImg++);
              // } else if (moveImg === 4) {
              //   setMoveImg(0);
              //   console.log("2");
              // } else {
              //   null;
              //   console.log("3");
              // }
              // setTimeout(() => {
              //   if (moveImg < 2) {
              //     setMoveImg(moveImg + 1);
              //     console.log(moveImg);
              //   } else {
              //     setMoveImg(0);
              //   }
              // }, 100);
              // console.log("h");
              // if (moveImg < 2) {
              //   setMoveImg(moveImg + 1);
              //   console.log(moveImg);
              // } else {
              //   setMoveImg(0);
              // }
            }}
          >
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
        <h3 className="mt-3 text-lg ">{title}</h3>
        <p className="text-sm">{formatter.format(price)}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
