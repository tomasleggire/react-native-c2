import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { PokemonType } from "../utils/PokemonTypes";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonType[];
}

export default function PokemonList(props: Props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      horizontal={false}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
