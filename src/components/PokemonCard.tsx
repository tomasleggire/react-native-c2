import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { PokemonType } from "../utils/PokemonTypes";

interface Props {
  pokemon: PokemonType;
}

export default function PokemonCard(props: Props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
  };

  return (
    <Pressable onPress={goToPokemon} style={styles.card}>
      <View style={styles.spacing}>
        <View style={styles.bgStyles}>
          <Text style={styles.number}>
            #{`${pokemon.order}`.padStart(3, "0")}
          </Text>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
