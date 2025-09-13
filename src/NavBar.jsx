import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const [isOpen, setIsOpen] = useState(false);
  const isAuth = localStorage.getItem("isAuth"); // حالة تسجيل الدخول
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
      
          <div className="flex items-center gap-2">
            <Link
              className="flex items-center gap-2 text-[#689B8A] font-bold text-xl"
              to="/"
            >
              ShopZone
            </Link>
          </div>

          
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#689B8A]"
                        : "text-gray-600 transition hover:text-[#689B8A]"
                    }
                  >
                    Cart
                  </NavLink>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </li>
              </ul>
            </nav>
          </div>

      
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 hidden md:flex">
              {!isAuth ? (
                <>
                  <Link
                    to="/login"
                    className="rounded-md bg-[#689B8A] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#38534B] transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#689B8A] hover:bg-gray-200 transition"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-[#689B8A] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition"
                >
                  Logout
                </button>
              )}
            </div>

          
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-[#689B8A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden mt-2 bg-white shadow rounded-lg p-4 space-y-2">
            <NavLink to="/home" className="block text-gray-700 hover:text-[#689B8A]">
              Home
            </NavLink>
            <NavLink to="/about" className="block text-gray-700 hover:text-[#689B8A]">
              About
            </NavLink>
            <NavLink to="/products" className="block text-gray-700 hover:text-[#689B8A]">
              Products
            </NavLink>
            <NavLink to="/categories" className="block text-gray-700 hover:text-[#689B8A]">
              Categories
            </NavLink>
            <NavLink to="/blog" className="block text-gray-700 hover:text-[#689B8A]">
              Blog
            </NavLink>
            <NavLink to="/cart" className="block text-gray-700 hover:text-[#689B8A]">
              Cart ({cartCount})
            </NavLink>
            <hr />
            {!isAuth ? (
              <>
                <Link
                  to="/login"
                  className="block text-sm font-medium text-[#689B8A] hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-sm font-medium text-[#689B8A] hover:underline"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left text-sm font-medium  hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
