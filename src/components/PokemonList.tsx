import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { PokemonType } from "../utils/PokemonTypes";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonType[];
  loadPokemons: () => void;
  isNext: string | null;
  isLoading: boolean;
}

export default function PokemonList(props: Props) {
  const { pokemons, loadPokemons, isNext, isLoading } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && !isLoading ? loadMore : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && isLoading ? (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
