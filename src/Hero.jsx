import React from "react";
import { Link } from "react-router-dom";
import photo from "./assets/photo-1523275335684-37898b6baf30.avif"

function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
 
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Discover Amazing <span className="text-[#689B8A]">Products</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
          Shop the latest trends and enjoy exclusive deals with fast delivery and easy checkout.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-[#689B8A]  text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="bg-white/20 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
