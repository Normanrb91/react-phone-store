import type { ProductListItem } from "../types/api";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: ProductListItem[];
}

const ProductGrid = ({ products }: ProductGridProps) => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
