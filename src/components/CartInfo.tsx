import { ShoppingCart } from "lucide-react";

interface CartInfoProps {
  cartCount: number;
}

const CartInfo: React.FC<CartInfoProps> = ({ cartCount }) => {
  return (
    <div className="relative flex items-center">
      <ShoppingCart size={28} className="text-blue-600" />

      {cartCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center -mr-1 -mt-1">
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartInfo;
