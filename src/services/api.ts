import axios from 'axios';
import type { ProductListItem, CartRequest, CartResponse, ProductDetail } from '../types/api';

const api = axios.create({
  baseURL: 'https://itx-frontend-test.onrender.com',
  headers: { 'Content-Type': 'application/json' },
});

export const getProducts = async (): Promise<ProductListItem[]> => {
  const { data } = await api.get<ProductListItem[]>('/api/product');
  return data;
};

export const getProductById = async (id: string): Promise<ProductDetail> => {
  const { data } = await api.get<ProductDetail>(`/api/product/${id}`);
  return data;
};

export const addToCart = async (payload: CartRequest): Promise<CartResponse> => {
  const { data } = await api.post<CartResponse>('/api/cart', payload);
  return data;
};