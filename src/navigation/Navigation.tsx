import React from "react";
import { Image } from "react-native";
import { RootStackParamList } from "./NavigationTypes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorite from "../screens/Favorite";

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ tabBarLabel: "", tabBarIcon: () => renderPokeBall() }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeBall = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 72, height: 72, top: -15 }}
    />
  );
};
