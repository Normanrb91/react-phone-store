import { useEffect, useState } from "react";
import { ProductListItem } from "../types/api";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import { useProductList } from "../queries/useProductList";
import { Loader } from "lucide-react";

const PRODUCTS_PER_PAGE = 8;

const ProductList = () => {
  const { data: products, isLoading, isError, error } = useProductList();
  const [filtered, setFiltered] = useState<ProductListItem[]>([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (products) {
      setFiltered(products);
      setCurrentPage(1);
    }
  }, [products]);

  useEffect(() => {
    if (!products) return;
    const results = products.filter(
      (p) =>
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    setCurrentPage(1);
  }, [query, products]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentItems = filtered.slice(start, start + PRODUCTS_PER_PAGE);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error loading product details.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar value={query} onChange={setQuery} />
      <ProductGrid products={currentItems} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
