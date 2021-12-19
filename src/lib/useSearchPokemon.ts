import { useLazyQuery } from '@apollo/client';
import { PokemonListType } from 'models/pokemon';
import { useEffect, useRef, useState } from 'react';
import { SEARCH_POKEMON } from './apiQueries';

export const useSearchPokemon = (): [
  PokemonListType[],
  (value: string) => void,
  () => void
] => {
  const initialRender = useRef(true);
  const [searchResult, setSearchResult] = useState<PokemonListType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [getSearchPokemon, { loading: loadingSearch, data: searchPokemon }] =
    useLazyQuery(SEARCH_POKEMON, { variables: { name: searchValue } });

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (loadingSearch === false) {
        setSearchResult([
          {
            id: searchPokemon?.pokemon?.id,
            name: searchPokemon?.pokemon?.name,
            image: searchPokemon?.pokemon?.sprites?.front_default,
          },
        ]);
      }
    }
  }, [searchPokemon]);

  const searchPokemonHandler = async (value: string) => {
    await setSearchValue(value);
    getSearchPokemon();
  };

  const resetSearchResult = () => {
    setSearchResult([]);
  };

  return [searchResult, searchPokemonHandler, resetSearchResult];
};
