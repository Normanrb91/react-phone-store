import { ProductDetail } from "../types/api";

interface Props {
  product: ProductDetail;
}

const ProductDetailsInfo = ({ product }: Props) => {
  const specifications = [
    { label: "CPU", value: product.cpu },
    { label: "RAM", value: product.ram },
    { label: "Sistema Operativo", value: product.os },
    { label: "Pantalla", value: product.displayResolution },
    { label: "Batería", value: product.battery },
    { label: "Cámara Principal", value: product.primaryCamera },
    { label: "Cámara Secundaria", value: product.secondaryCmera },
    { label: "Dimensiones", value: product.dimentions },
    { label: "Peso", value: product.weight },
  ];

  return (
    <div className="space-y-3 text-sm text-gray-700">
      <h2 className="text-3xl font-semibold text-gray-900">
        {product.brand} {product.model}
      </h2>
      <p className="text-xl text-blue-600 font-bold">
        {product.price ? `${product.price} €` : "Precio no disponible"}
      </p>

      <ul className="space-y-1">
        {specifications.map((spec, index) => (
          <li key={index} className="flex flex-wrap">
            <span className="font-medium text-gray-900">{spec.label}:</span>
            <span className="ml-2 text-gray-700">
              {spec.value || "No disponible"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailsInfo;
