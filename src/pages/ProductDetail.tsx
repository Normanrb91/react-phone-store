import { useParams, Link } from "react-router-dom";
import type { ProductDetail } from "../types/api";
import { ChevronLeft, Loader } from "lucide-react";
import ProductDetailsInfo from "../components/ProductDetailInfo";
import ProductActions from "../components/ProductActions";
import { useProductDetail } from "../queries/useProductDetail";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProductDetail(id!);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

  if (error || !product) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error loading product details.
      </div>
    );
  }

  return (
    <>
      <div className="w-full text-left m-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
        >
          <ChevronLeft size={"20px"} />
          Volver a productos
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
          <img
            src={product.imgUrl}
            alt={product.model}
            className="object-contain max-h-80 transition-transform hover:scale-125"
          />
        </div>

        <div className="flex flex-col justify-between gap-4">
          <ProductDetailsInfo product={product} />
          <ProductActions product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
