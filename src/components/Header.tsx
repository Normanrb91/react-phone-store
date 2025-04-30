import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = Number(localStorage.getItem("cart_count") || 0);
    setCartCount(count);
  }, [location]);

  const generateBreadcrumb = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <span key={index}>
              {" / "}
              <Link to={routeTo} className="capitalize hover:underline">
                {decodeURIComponent(name)}
              </Link>
            </span>
          );
        })}
      </nav>
    );
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex flex-col">
        <Link
          to="/"
          className="text-xl font-bold text-brand-500 hover:opacity-80"
        >
          📱 PhoneStore
        </Link>
        {generateBreadcrumb()}
      </div>
      <div className="text-sm font-medium text-gray-700">
        🛒 Cart: <span className="text-brand-500">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
