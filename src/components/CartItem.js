import React from "react";
import { remove } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="border-b-2 flex gap-24 p-5 ml-24 w-[70%]">
      <div>
        <img src={item.image} alt="" className=" h-[150px]" />
      </div>
      <div className="flex flex-col max-w-[50%] justify-end items-end">
        <div>
          <h1 className="text-lg font-bold">{item.title}</h1>
          <h1 className="mt-3">
            {item.description.split(" ").slice(0, 10).join(" ")}
          </h1>
        </div>
        <div className="flex justify-around space-x-36 mt-10">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div onClick={removeFromCart}>
            <i className="ri-delete-bin-6-line bg-red-300 w-32 h-32 p-1 rounded-full hover:bg-red-600 trasition duration-100 ease-in" />
          </div>
        </div>
      </div>
    </div>
  );
}
