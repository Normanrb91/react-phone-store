import axios from 'axios';
import type { Product, CartRequest, CartResponse } from '../types/api';

const api = axios.create({
  baseURL: 'https://itx-frontend-test.onrender.com',
  headers: { 'Content-Type': 'application/json' },
});

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>('/api/product');
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`/api/product/${id}`);
  return data;
};

export const addToCart = async (payload: CartRequest): Promise<CartResponse> => {
  const { data } = await api.post<CartResponse>('/api/cart', payload);
  return data;
};