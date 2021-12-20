export type PokemonListType = {
  name: string;
  image: string;
  id: number;
  artwork?: string;
};

export type StatsType = {
  base: number;
  name: string;
};

export type PokemonDetailType = {
  id: number;
  name: string;
  moves: string[];
  types: string[];
  weight: number;
  abilities: string[];
  exp: number;
  height: number;
  stats: StatsType[];
};
