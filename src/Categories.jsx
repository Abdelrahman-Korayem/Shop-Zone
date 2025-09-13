import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="p-12 pt-25">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Categories
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/categories/${cat.slug || cat}`}
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg text-center transition"
          >
            <h2 className="capitalize text-lg font-semibold text-gray-700">
              {cat.name || cat}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
