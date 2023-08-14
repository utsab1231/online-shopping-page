import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.log("Something went off");
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="pb-12">
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
}
