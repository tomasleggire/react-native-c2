import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={Account}
        options={{
          title: "Mi Cuenta",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
