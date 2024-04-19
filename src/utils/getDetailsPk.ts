import { getPokemonDetailsByUrlApi } from "../api/pokemons";
import { PokemonType } from "./PokemonTypes";

export async function getDetailsPk(pokemons: any) {
  const pokemonsArray: PokemonType[] = [];
  try {
    for await (const pokemon of pokemons) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other["official-artwork"].front_default,
      });
    }
  } catch (error) {
    throw error;
  }
  return pokemonsArray;
}
