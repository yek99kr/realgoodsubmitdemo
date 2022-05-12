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
    <>
      <div className="fixed right-2 top-2 text-md thumbcursor z-[10]">
        <a onClick={() => setCartOpen(!cartOpen)}>Cart ({cartQuantity})</a>
      </div>
      <MiniCart cart={cart} />
    </>
  );
}
