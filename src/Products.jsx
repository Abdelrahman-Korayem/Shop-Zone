import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice.js";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader"; 
import { Star } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        toast.error(" Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));
      toast.success(" Added to cart successfully" ,{
        className :"bg-[#689B8A] text-white font-semibold rounded-xl shadow-lg"
      });
    } catch (error) {
      toast.error(" Failed to add to cart");
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );


  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25">
        <ClipLoader color="#ffffff" size={60} /> 
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

 
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#689B8A]"
        />
      </div>


      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <NavLink
                  to={`/ProductDetails/${product.id}`}
                  className="text-sm mt-2 inline-block hover:underline text-[#689B8A] hover:text-[#38534B] cursor-pointer"
                >
                  Product Details
                </NavLink>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 flex gap-3 justify-center items-center">
                    <Star  className="text-yellow-400 "  /> {product.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-[#689B8A] hover:bg-[#38534B] cursor-pointer text-white py-2 rounded-xl transition-colors"
                >
                   Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;
