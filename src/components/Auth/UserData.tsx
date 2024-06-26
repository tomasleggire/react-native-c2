import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavorite } from "../../api/favorite";

export default function UserData() {
  const [total, setTotal] = useState(0);
  const { user, logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavorite();
          setTotal(response.length || 0);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text
          style={styles.title}
        >{`${user?.firstName} ${user?.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre"
          text={`${user?.firstName} ${user?.lastName}`}
        />
        <ItemMenu title="Username" text={`${user?.username}`} />
        <ItemMenu title="Email" text={`${user?.email}`} />
        <ItemMenu title="Total Favoritos" text={`${total} Pokemons`} />
      </View>

      <Button title="Desconectarse" onPress={logout} />
    </View>
  );
}

function ItemMenu(props: { title: string; text: string }) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "cfcfcf",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
