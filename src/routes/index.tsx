import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
