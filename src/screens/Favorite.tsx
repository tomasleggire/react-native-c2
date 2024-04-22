import React, { useState, useEffect } from "react";
import { getPokemonsFavorite } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { PokemonType } from "../utils/PokemonTypes";
import { getPokemonDetailsApi } from "../api/pokemons";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function Favorite() {
  const [favoritePokemons, setFavoritesPokemons] = useState<PokemonType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        const response = await getPokemonsFavorite();
        const favoritePokemonsArray: PokemonType[] = [];
        for await (const id of response) {
          const pokemonDetails = await getPokemonDetailsApi(id);
          favoritePokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }
        setFavoritesPokemons(favoritePokemonsArray);
      })();
    }
  }, [user, favoritePokemons]);

  return !user ? (
    <NoLogged />
  ) : (
    <PokemonList
      pokemons={favoritePokemons}
      loadPokemons={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
