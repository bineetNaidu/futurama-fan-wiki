import { AxiosError } from 'axios';
import useSwr from 'swr';
import { fetcher } from '../lib/axiosClient';
import type { Quote } from '../lib/types';

export const useGetQuotesByCharacter = (name?: string) => {
  const { data: quotes, error } = useSwr<
    Quote[],
    AxiosError<{ message: string }>
  >(`/characters/${name}`, fetcher);
  return { quotes, error };
};
