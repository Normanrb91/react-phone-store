
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/api';
import type { ProductDetail } from '../types/api';

export const useProductDetail = (id: string) =>
  useQuery<ProductDetail, Error>({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    staleTime: 60 * 60 * 1000, 
    gcTime: 60 * 60 * 1000,    
    enabled: !!id,             
  });