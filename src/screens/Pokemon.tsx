import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsApi } from "../api/pokemons";

interface Props {
  navigation: any;
  route: any;
}

export default function Pokemon(props: Props) {
  const [pokemon, setPokemon] = useState<any>(null);

  const {
    navigation,
    route: { params },
  } = props;

  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(pokemon);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>Estamos en el pokemon</Text>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
}
