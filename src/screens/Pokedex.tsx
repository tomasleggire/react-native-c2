import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemons";
import PokemonList from "../components/PokemonList";
import { PokemonType } from "../utils/PokemonTypes";
import { getDetailsPk } from "../utils/getDetailsPk";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray: PokemonType[] = await getDetailsPk(response.results);
      // for await (const pokemon of response.results) {
      //   const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      //   pokemonsArray.push({
      //     id: pokemonDetails.id,
      //     name: pokemonDetails.name,
      //     type: pokemonDetails.types[0].type.name,
      //     order: pokemonDetails.order,
      //     image: pokemonDetails.sprites.other["official-artwork"].front_default,
      //   });
      // }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}
