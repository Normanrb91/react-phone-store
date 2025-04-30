interface CartInfoProps {
  cartCount: number;
}

const CartInfo: React.FC<CartInfoProps> = ({ cartCount }) => {
  return (
    <div className="text-sm font-medium text-gray-700">
      🛒 Cart: <span className="text-brand-500">{cartCount}</span>
    </div>
  );
};

export default CartInfo;
