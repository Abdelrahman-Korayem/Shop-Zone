import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
     
          <div>
            <h2 className="text-2xl font-bold text-[#689B8A]">ShopZone</h2>
            <p className="mt-3 text-sm text-gray-400">
              Your trusted destination for quality products at the best prices.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-[#689B8A] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[#689B8A]">Home</a></li>
              <li><a href="/about" className="hover:text-[#689B8A]">About</a></li>
              <li><a href="/products" className="hover:text-[#689B8A]">Products</a></li>
              <li><a href="/categories" className="hover:text-[#689B8A]">Categories</a></li>
              <li><a href="/blog" className="hover:text-[#689B8A]">Blog</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold text-[#689B8A] mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#689B8A]"><Facebook /></a>
              <a href="#" className="hover:text-[#689B8A]"><Instagram /></a>
              <a href="#" className="hover:text-[#689B8A]"><Twitter /></a>
            </div>
          </div>
        </div>

      
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SunStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
