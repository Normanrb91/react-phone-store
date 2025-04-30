import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pathnames: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathnames }) => {
  return (
    <nav className="text-sm text-gray-500">
      <Link to="/" className="hover:underline">
        ProductList
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

export default Breadcrumb;
