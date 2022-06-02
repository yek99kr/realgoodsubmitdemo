import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <div className="fixed z-[2] w-[100vw] flex">
      <Link href="/" passHref>
        <a className="relative inline ml-5 mt-4 p-1 pl-2 pr-2  thumbcursor backdrop-blur   rounded-full shadow-lg bg-white bg-opacity-50 hover:bg-opacity-100 hover:shadow-2xl w-[62px] h-[60px]">
          <img src="thumbsup.png" className="h-[45px] mt-[0.25rem]" />
        </a>
      </Link>

      <Link href="/projects" passHref>
        <a className="relative inline ml-5 mt-4 p-1 pl-4 pr-4 h-[30px] thumbcursor backdrop-blur   rounded-full shadow-lg bg-white bg-opacity-50 hover:bg-opacity-100 hover:shadow-2xl uppercase text-sm">
          Projects
        </a>
      </Link>

      <Link href="/store" passHref>
        <a className="relative inline ml-5 mt-4 p-1 pl-4 pr-4 h-[30px] thumbcursor backdrop-blur   rounded-full shadow-lg bg-white bg-opacity-50 hover:bg-opacity-100 hover:shadow-2xl uppercase text-sm">
          Store
        </a>
      </Link>

      <Link href="/store" passHref>
        <a className="relative inline ml-5 mt-4 p-1 pl-4 pr-4 h-[30px] thumbcursor backdrop-blur   rounded-full shadow-lg bg-white bg-opacity-50 hover:bg-opacity-100 hover:shadow-2xl uppercase text-sm">
          Contact
        </a>
      </Link>

      <a
        className="absolute inline  right-0 ml-5 mt-4 mr-4 p-1 pl-4 pr-4  backdrop-blur   rounded-full shadow-lg bg-white bg-opacity-50 uppercase hover:bg-opacity-100 hover:shadow-2xl text-sm"
        onClick={() => setCartOpen(!cartOpen)}
      >
        Cart ({cartQuantity})
      </a>

      {/* <button className="bg-white text-gray-800 font-semibold ml-5 mt-4 p-1 pl-4 pr-4 h-[35px] rounded-full text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] thumbcursor submitButton">
        home
      </button>
      <button className="bg-white text-gray-800 font-semibold ml-5 mt-4 p-1 pl-4 pr-4 h-[35px] rounded-full text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] thumbcursor submitButton">
        projects
      </button> */}

      {/* <Link href="/" passHref>
        <a
          className="relative inline ml-5 mt-4 p-1 thumbcursor  rounded-2xl shadow-lg bg-sky-500 w-[15px] h-[15px] md:w-[20px] md:h-[20px] overflow-hidden"
          onMouseEnter={(e) => {
            e.target.style.transition = "0.2s";
            e.target.style.width = "70px";
          }}
          onMouseLeave={(e) => {
            e.target.style.width = "20px";
          }}
        >
          <span className="relative pointer-events-none text-xs top-[-3.5px] left-[6px]">
            Home
          </span>
        </a>
      </Link>

      <Link href="/projects" passHref>
        <a
          className="relative inline ml-5 mt-4 p-1 thumbcursor backdrop-blur   rounded-2xl shadow-lg bg-pink-500 w-[15px] h-[15px] md:w-[20px] md:h-[20px] "
          onMouseEnter={(e) => {
            e.target.style.transition = "0.2s";
            e.target.style.width = "40px";
          }}
          onMouseLeave={(e) => {
            e.target.style.width = "20px";
          }}
        ></a>
      </Link>

      <Link href="/store" passHref>
        <a
          className="relative inline ml-5 mt-4 p-1 thumbcursor   rounded-2xl shadow-lg bg-green-500 w-[15px] h-[15px] md:w-[20px] md:h-[20px] "
          onMouseEnter={(e) => {
            e.target.style.transition = "0.2s";
            e.target.style.width = "40px";
          }}
          onMouseLeave={(e) => {
            e.target.style.width = "20px";
          }}
        ></a>
      </Link>

      <a
        className="relative inline ml-5 mt-4 p-1 thumbcursor   rounded-2xl shadow-lg bg-yellow-500 w-[15px] h-[15px] md:w-[20px] md:h-[20px] "
        onMouseEnter={(e) => {
          e.target.style.transition = "0.2s";
          e.target.style.width = "40px";
        }}
        onMouseLeave={(e) => {
          e.target.style.width = "20px";
        }}
      ></a>

      <a
        className="absolute inline  right-0 ml-5 mt-4 mr-4  pl-4 pr-4  backdrop-blur   rounded-2xl h-[20px] text-[0.8em] shadow-lg bg-white "
        onClick={() => setCartOpen(!cartOpen)}
      >
        <img
          src="/shop.png"
          className="relative inline h-[17px] pr-1 top-[-1px]"
        ></img>
        Cart ({cartQuantity})
      </a> */}

      <MiniCart cart={cart} />
    </div>
  );
}
