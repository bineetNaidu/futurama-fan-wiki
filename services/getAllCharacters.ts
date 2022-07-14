import { AxiosError } from 'axios';
import useSwr from 'swr';
import { fetcher } from '../lib/axiosClient';
import type { Character } from '../lib/types';

export const useGetAllCharacters = () => {
  const { data, error } = useSwr<Character[], AxiosError<{ message: string }>>(
    '/v2/characters',
    fetcher
  );
  return { data, error };
};
