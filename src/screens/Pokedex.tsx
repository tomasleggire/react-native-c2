import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemons";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi()
      .then((res) => console.log("res", res))
      .catch((e) => console.log("err", e));
  }, []);

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
