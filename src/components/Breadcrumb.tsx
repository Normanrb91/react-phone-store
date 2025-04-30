import { Link } from "react-router-dom";

interface BreadcrumbProps {
  pathnames: string[];
}

const Breadcrumb = ({ pathnames }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-gray-500">
      <Link to="/" className="hover:underline">
        ProductList
      </Link>
      {pathnames.map((name, index) => {
        const routeTo =
          index === 0 ? "#" : `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={index}>
            {" / "}
            {index === 0 || index === pathnames.length - 1 ? (
              <span className="capitalize">{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo} className="capitalize hover:underline">
                {decodeURIComponent(name)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
