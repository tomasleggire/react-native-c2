import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsFavorite } from "../api/favorite";

export default function Favorite() {
  const checkFavoritePokemons = async () => {
    const response = await getPokemonsFavorite();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener Favoritos" onPress={checkFavoritePokemons} />
    </SafeAreaView>
  );
}
