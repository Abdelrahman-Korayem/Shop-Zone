import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "./redux/cartSlice";
import ClipLoader from "react-spinners/ClipLoader";

function ProductDetails() {
  const [fetchData, setfetchData] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setfetchData(data);
    }
    getData();
  }, [id]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    dispatch(addToCart(product));

    if (exist) {
      toast.info("🔼 Quantity updated in cart");
    } else {
      toast.success(" Product added to cart!");
    }
  };

 if (!fetchData) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ClipLoader color="#ffffff" size={60} />
    </div>
  );
}
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 pt-35">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={fetchData.thumbnail}
          alt={fetchData.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{fetchData.title}</h1>
          <p className="text-gray-600 mb-4">{fetchData.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-green-600">
              ${fetchData.price}
            </span>
            <span className="text-sm line-through text-gray-400">
              $
              {(
                fetchData.price /
                (1 - fetchData.discountPercentage / 100)
              ).toFixed(2)}
            </span>
            <span className="text-red-500 font-semibold">
              -{fetchData.discountPercentage}%
            </span>
          </div>
          <p className="text-sm text-gray-700">Stock: {fetchData.stock}</p>
          <p className="text-sm text-gray-700">Category: {fetchData.category}</p>
          <p className="text-sm text-gray-700">Brand: {fetchData.brand}</p>
          <p className="text-sm text-gray-700">SKU: {fetchData.sku}</p>

          <button
            onClick={() => handleAddToCart(fetchData)}
            className="mt-6 w-full bg-[#689B8A] text-white py-2 rounded-xl transition-colors hover:bg-[#38534B]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
