import { useLazyQuery } from '@apollo/client';
import { PokemonListType } from 'models/pokemon';
import { useEffect, useRef, useState } from 'react';
import { SEARCH_POKEMON } from './apiQueries';

export const useSearchPokemon = (): [
  PokemonListType[],
  (value: string) => void,
  () => void,
  boolean
] => {
  const initialRender = useRef(true);
  const [searchResult, setSearchResult] = useState<PokemonListType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [getSearchPokemon, { loading, data }] = useLazyQuery(SEARCH_POKEMON, {
    variables: { name: searchValue },
  });

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (loading === false) {
        setSearchResult([
          {
            id: data.pokemon.id ?? 0,
            name: data.pokemon.name ?? '',
            image: data.pokemon.sprites
              ? data.pokemon.sprites.front_default
              : '',
          },
        ]);
      }
    }
  }, [data]);

  const searchPokemonHandler = async (value: string) => {
    await setSearchValue(value);
    getSearchPokemon();
  };

  const resetSearchResult = () => {
    setSearchResult([]);
  };

  return [searchResult, searchPokemonHandler, resetSearchResult, loading];
};
