import { useQuery } from '@apollo/client';
import { PokemonDetailType } from 'models/pokemon';
import { useEffect, useState } from 'react';
import { GET_POKEMON_DETAILS } from './apiQueries';

export const useGetPokemonDetails = (): [
  PokemonDetailType | undefined,
  boolean,
  (value: string) => void
] => {
  const [details, setDetails] = useState<PokemonDetailType | undefined>();
  const [name, setName] = useState('');
  const { loading, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { name: name },
  });

  useEffect(() => {
    if (loading === false) {
      if (data.pokemon) {
        const { pokemon } = data;
        setDetails({
          name: name,
          abilities: pokemon.abilities.map((ability: any) => ability.name),
          exp: pokemon.base_experience,
          height: pokemon.height,
          weight: pokemon.weight,
          stats: pokemon.stats.map((stat: any) => ({
            base: stat.base_stat,
            name: stat.stat.name,
          })),
          moves: pokemon.moves.map((move: any) => move.name),
          types: pokemon.types.map((type: any) => type.type.name),
        });
      }
    }
  }, [data]);

  const changePokemonName = async (value: string) => {
    await setName(value);
  };

  return [details, loading, changePokemonName];
};
