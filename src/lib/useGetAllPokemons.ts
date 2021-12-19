import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { PokemonListType } from 'models/pokemon';
import { GET_ALL_POKEMONS } from 'lib/apiQueries';

export const useGetAllPokemons = (): [PokemonListType[], () => void] => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);
  const { loading, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: 10, offset: page },
  });

  useEffect(() => {
    if (loading === false && data.pokemons.results) {
      setPokemons([...pokemons, ...data?.pokemons?.results]);
    }
  }, [data]);

  const loadNextPokemons = () => {
    setPage(page + 10);
  };

  return [pokemons, loadNextPokemons];
};
