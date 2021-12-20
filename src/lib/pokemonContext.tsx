import React, { useState } from 'react';
import { PokemonDetailType } from 'models/pokemon';

export type MyPokemonType = {
  pokemon: PokemonDetailType;
  nickname: string;
  image: string;
  id: string;
};

type PokemonContextType = {
  myPokemons: MyPokemonType[];
  catchPokemon: (data: MyPokemonType) => Promise<any>;
  releasePokemon: (id: string) => Promise<any>;
};

export const PokemonContext = React.createContext<PokemonContextType>({
  myPokemons: [],
  catchPokemon: () => {
    return new Promise(() => {});
  },
  releasePokemon: () => {
    return new Promise(() => {});
  },
});

interface Props {
  children: React.ReactNode;
}

export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [pokemons, setPokemons] = useState<MyPokemonType[]>([]);

  const addPokemonToList = (data: MyPokemonType): Promise<any> => {
    return new Promise((resolve, error) => {
      if (!pokemons.some((pokemon) => pokemon.id === data.id)) {
        setPokemons([...pokemons, data]);
        return resolve({ status: 'successfully added' });
      }

      return error({ status: 'pokemon already exists' });
    });
  };

  const removePokemonToList = (id: string): Promise<any> => {
    return new Promise((resolve, error) => {
      if (!pokemons.some((pokemon) => pokemon.id === id)) {
        return error({ status: 'pokemon doesnt exists' });
      }

      const newPokemons = pokemons.filter((pokemon) => pokemon.id === id);
      setPokemons(newPokemons);
      return resolve({ status: 'successfully removed' });
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        myPokemons: pokemons,
        catchPokemon: addPokemonToList,
        releasePokemon: removePokemonToList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
