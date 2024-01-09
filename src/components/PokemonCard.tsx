import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { PokemonType } from "../utils/PokemonTypes";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PokedexStackParamList } from "../navigation/NavigationTypes";

interface Props {
  pokemon: PokemonType;
}

export default function PokemonCard(props: Props) {
  const { pokemon } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <Pressable onPress={goToPokemon} style={styles.card}>
      <View style={styles.spacing}>
        <View style={bgStyles}>
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
    flex: 1,
    borderRadius: 15,
    padding: 10,
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
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
