import { StyleSheet, View, Text } from "react-native";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import React from "react";

interface Props {
  types: { slot: number; type: { name: string; url: string } }[];
}

export default function Type(props: Props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.name}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    textTransform: "capitalize",
  },
});
