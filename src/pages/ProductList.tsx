import { useEffect, useState } from "react";
import { ProductListItem } from "../types/api";
import { getProducts } from "../services/api";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const PRODUCTS_PER_PAGE = 8;

const ProductList = () => {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [filtered, setFiltered] = useState<ProductListItem[]>([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
      setCurrentPage(1);
    });
  }, []);

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.model.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(results);
    setCurrentPage(1);
  }, [query, products]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentItems = filtered.slice(start, start + PRODUCTS_PER_PAGE);

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
