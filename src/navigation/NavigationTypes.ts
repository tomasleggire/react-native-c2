import { PokemonType } from "../utils/PokemonTypes";

export type RootStackParamList = {
  Account: undefined;
  Pokedexx: undefined;
  Favorite: undefined;
  Pokemon: undefined;
};

export type PokedexStackParamList = {
  Pokedex: undefined;
  Pokemon: {
    pokemon: PokemonType;
  };
};
