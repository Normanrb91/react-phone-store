import { useState, useEffect } from "react";
import type { ProductDetail } from "../types/api";
import { useCartStore } from "../store/cartStore";
import { addToCart } from "../services/api";

interface ProductActionsProps {
  product: ProductDetail;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [selectedStorage, setSelectedStorage] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const addItem = useCartStore((state) => state.addItem);
  const storageOptions = product.options.storages || [];
  const colorOptions = product.options.colors || [];

  useEffect(() => {
    if (storageOptions.length > 0) {
      setSelectedStorage(storageOptions[0].code);
    }
    if (colorOptions.length > 0) {
      setSelectedColor(colorOptions[0].code);
    }
  }, [storageOptions, colorOptions]);

  const handleAddToCart = async () => {
    if (selectedColor === null || selectedStorage === null) return;

    setIsAdding(true);

    try {
      const payload = {
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      };

      const response = await addToCart(payload);

      if (response.count) {
        addItem(response.count);
      } else {
        console.error("Error al añadir al carrito");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="storage"
            className="text-sm font-medium text-gray-900 text-left"
          >
            Almacenamiento
          </label>
          <select
            id="storage"
            value={selectedStorage?.toString()}
            onChange={(e) => setSelectedStorage(Number(e.target.value))}
            className="text-sm cursor-pointer border rounded px-1 py-1 text-gray-700"
          >
            {storageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="color"
            className="text-sm font-medium text-gray-900 text-left"
          >
            Color
          </label>
          <select
            id="color"
            value={selectedColor?.toString()}
            onChange={(e) => setSelectedColor(Number(e.target.value))}
            className="text-sm cursor-pointer border rounded px-1 py-1 text-gray-700"
          >
            {colorOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button
          onClick={handleAddToCart}
          className={`py-1.5 px-4 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${
            isAdding ? "bg-blue-300 cursor-not-allowed" : ""
          }`}
          disabled={isAdding}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
