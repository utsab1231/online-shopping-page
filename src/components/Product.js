import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item added sucesfully");
  };
  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item removed from cart");
  };
  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4 gap-3 m-4 mt-10 ml-5 rounded-xl  outline-gray-100 shadow-md">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {product.title.split(" ").slice(0, 5).join(" ") + "..."}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[150px]">
        <img src={product.image} alt="product" className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-[45px] mt-5 items-center">
        <div>
          <p className="text-green-600 font-semibold items-center w-full mt-5">
            ${product.price}
          </p>
        </div>

        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={removeFromCart}
            className="text-gray-700 border-2 border-gray-100 rounded-full font-semibold text-[12px]  px-3 p-1 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in mt-5"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-gray-700 border-2 border-gray-100 rounded-full font-semibold text-[12px]  px-3 p-1 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in mt-5"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
