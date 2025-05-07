
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/api';
import type { ProductListItem } from '../types/api';

export const useProductList = () =>
  useQuery<ProductListItem[], Error>({
    queryKey:  ['products'],
    queryFn:  getProducts,
    staleTime: 60 * 60 * 1000,  
    gcTime: 60 * 60 * 1000,
  },
);
