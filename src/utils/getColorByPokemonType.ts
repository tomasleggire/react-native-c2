import { POKEMON_TYPE_COLORS } from "./constans";

export const getColorByPokemonType = (type: string) =>
  POKEMON_TYPE_COLORS[type as keyof typeof POKEMON_TYPE_COLORS];
