import { Link } from "react-router-dom";
import type { ProductListItem } from "../types/api";

interface ProductCardProps {
  product: ProductListItem;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/product/${product.id}`}
    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border overflow-hidden"
  >
    <img
      src={product.imgUrl}
      alt={`${product.brand} ${product.model}`}
      className="w-full h-48 object-contain bg-gray-100 p-2"
    />
    <div className="p-4 space-y-1">
      <h3 className="text-base font-semibold text-gray-800">{product.brand}</h3>
      <p className="text-sm text-gray-600">{product.model}</p>
      <p className="text-blue-600 font-bold text-sm">
        {product.price ? `€${product.price}` : "Precio no disponible"}
      </p>
    </div>
  </Link>
);

export default ProductCard;
