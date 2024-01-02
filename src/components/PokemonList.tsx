import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";

export default function PokemonList(props: any) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => String(pokemon.id)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
