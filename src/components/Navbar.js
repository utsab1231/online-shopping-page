import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img
              src="https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-shopping-cart-circle-icon-by-vexels.png"
              alt="shopping-logo"
              className="w-20 h-20"
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 space-x-6">
          <NavLink to="/">
            <p className="text-2xl">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <i className="ri-shopping-cart-line text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white bg-green-600">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
