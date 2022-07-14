import { AxiosError } from 'axios';
import useSwr from 'swr';
import { fetcher } from '../lib/axiosClient';
import type { Character } from '../lib/types';

export const useGetCharacter = (name?: string) => {
  const { data: character, error } = useSwr<
    Character[],
    AxiosError<{ message: string }>
  >(`/v2/characters?search=${name}`, fetcher);
  return { character, error };
};
