import { AxiosError } from 'axios';
import useSwr from 'swr';
import { fetcher } from '../lib/axiosClient';

interface Character {
  Age: string;
  FirstAppearance: string;
  Name: string;
  PicUrl: string;
  Planet: string;
  Profession: string;
  Relatives: string;
  Species: string;
  Status: string;
  VoicedBy: string;
}

export const useGetAllCharacters = () => {
  const { data, error } = useSwr<Character[], AxiosError<{ message: string }>>(
    '/v2/characters',
    fetcher
  );
  return { data, error };
};
