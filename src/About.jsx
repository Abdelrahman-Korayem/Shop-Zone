import React, { useEffect, useState } from "react";
import photo from "./assets/photo-1523275335684-37898b6baf30.avif"
import { Star } from "lucide-react";

function About() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const response = await fetch("https://dummyjson.com/products/1"); 
      const data = await response.json();
      setReviews(data.reviews || []); 
    }
    getReviews();
  }, []);

  return (
    <div className="about-page pt-15">

    
      <section
       className="relative h-[50vh] w-full bg-center bg-cover flex items-center justify-center"
             style={{
               backgroundImage: `url(${photo})`,
             }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Learn more about our mission, vision, and what makes us unique.
          </p>
        </div>
      </section>

   
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are dedicated to bringing the best shopping experience with a
            wide variety of products, high-quality standards, and a seamless
            buying process. Our mission is to connect customers with the things
            they love in the most efficient way possible.
          </p>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-xl bg-gray-50">
            <h3 className="text-4xl font-bold text-[#689B8A]">500+</h3>
            <p className="mt-2 text-gray-700">Products Available</p>
          </div>
          <div className="p-6 shadow rounded-xl bg-gray-50">
            <h3 className="text-4xl font-bold text-[#689B8A]">10K+</h3>
            <p className="mt-2 text-gray-700">Happy Customers</p>
          </div>
          <div className="p-6 shadow rounded-xl bg-gray-50">
            <h3 className="text-4xl font-bold text-[#689B8A]">24/7</h3>
            <p className="mt-2 text-gray-700">Customer Support</p>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                  <div className="mt-4 ">
                    <p className="font-semibold text-gray-800">
                      {review.reviewerName}
                    </p>
                    <p className="text-sm text-gray-500 flex gap-2">{review.rating} <Star  className="text-yellow-400 "  /></p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                Loading reviews...
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
