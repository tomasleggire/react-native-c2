import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

interface Props {
  navigation: any;
  route: any;
}

export default function Pokemon(props: Props) {
  const { navigation, route } = props;
  console.log(route);

  return (
    <SafeAreaView>
      <Text>Estamos en un pokemon</Text>
    </SafeAreaView>
  );
}
