import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchCategoryProducts() {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
      const data = await res.json();
      setProducts(data.products);
    }
    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="p-12 py-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 capitalize">
        {categoryName} Products
      </h1>
      {products.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-lg h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-3 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="mt-2 text-[#689B8A] font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}

export default CategoryProducts;
