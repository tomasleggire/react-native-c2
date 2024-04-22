import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AccountStackParamList } from "../navigation/NavigationTypes";

export default function NoLogged() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const navigateToLogin = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesión
      </Text>
      <Pressable style={styles.button} onPress={navigateToLogin}>
        <Text style={styles.textButton}>Ir al login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000",
  },
});
