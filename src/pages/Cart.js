import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex mr-24">
      {cart.length > 0 ? (
        <div className="flex">
          <div className="">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col justify-between mt-12">
            <div>
              <div className="text-green-800 font-semibold uppercase text-sm">
                Your Cart
              </div>
              <div className="text-green-800 font-extrabold text-4xl uppercase">
                Summary
              </div>
              <p className="mt-3 font-semibold text-gray-600">
                <span className="">Total Items:{cart.length}</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-600 text-sm">
                Total Amount:<span className="text-black">${totalAmount}</span>
              </p>
              <button
                className="mt-4 bg-green-600 px-16 py-1 text-white font-semibold text-md rounded-md 
              hover:scale-105 hover:ring-2 hover:ring-green-300 hover:ring-opacity-50 transition duration-200 ease-in-out"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-auto mt-[10vh]">
          <h1 className=" text-9xl font-bold uppercase">Cart Empty</h1>
          <NavLink to={"/"}>
            <button className="mt-24 ml-96 bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-500 hover:to-blue-400 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
