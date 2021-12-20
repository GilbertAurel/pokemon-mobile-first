import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const localPokemons = JSON.parse(localStorage.getItem('pokemons') || '');

    if (localPokemons) {
      setPokemons(localPokemons);
    }
  }, []);

  const addPokemonToList = (data: MyPokemonType): Promise<any> => {
    return new Promise((resolve, error) => {
      if (!pokemons.some((pokemon) => pokemon.id === data.id)) {
        setPokemons([...pokemons, data]);

        return setTimeout(() => {
          localStorage.setItem('pokemons', JSON.stringify(pokemons));
          resolve({ status: 'successfully added', data: pokemons });
        }, 1000);
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

      return setTimeout(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
        resolve({ status: 'successfully removed', data: pokemons });
      }, 1000);
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
