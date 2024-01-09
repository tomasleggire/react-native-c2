import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

interface Props {
  //navigation: any;
  route: any;
}

export default function Pokemon(props: Props) {
  const { route } = props;
  const { pokemon } = route.params;
  console.log(route.params);

  return (
    <SafeAreaView>
      <Text>Estamos en el pokemon {pokemon.name}</Text>
    </SafeAreaView>
  );
}
