import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens/Favorite";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritee"
        component={Favorite}
        options={{
          title: "Favoritos",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
