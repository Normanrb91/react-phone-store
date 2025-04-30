import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import CartInfo from "./CartInfo";

const Header = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(Number(localStorage.getItem("cart_count") || 0));
  }, []);

  const pathnames = location.pathname.split("/").filter((path) => path);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex flex-col items-start">
        {" "}
        <Link
          to="/"
          className="text-xl font-bold text-brand-500 hover:opacity-80"
        >
          📱 PhoneStore
        </Link>
        <Breadcrumb pathnames={pathnames} />
      </div>

      <CartInfo cartCount={cartCount} />
    </header>
  );
};

export default Header;
