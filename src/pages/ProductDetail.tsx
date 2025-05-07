import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import type { ProductDetail } from "../types/api";
import { ChevronLeft, Loader } from "lucide-react";
import ProductDetailsInfo from "../components/ProductDetailInfo";
import ProductActions from "../components/ProductActions";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

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
