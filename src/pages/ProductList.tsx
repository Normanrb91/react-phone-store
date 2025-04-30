import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import { ProductListItem } from "../types/api";
import { getProducts } from "../services/api";
import ProductGrid from "../components/ProductGrid";

const ProductList = () => {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [filtered, setFiltered] = useState<ProductListItem[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.model.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(results);
  }, [query, products]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar value={query} onChange={setQuery} />
      <ProductGrid products={filtered} />
    </div>
  );
};

export default ProductList;
