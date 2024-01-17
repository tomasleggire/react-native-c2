import { StyleSheet, View, Text } from "react-native";
import React from "react";

interface Props {
  stats: any;
}

export default function Stats(props: Props) {
  const { stats } = props;

  const barColorStyle = (number: any) => {
    const color = number > 49 ? "#00ac17" : "#ff3e3e";
    return color;
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item: any, index: number) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={{
                  ...styles.bar,
                  width: `${item.base_stat}%`,
                  backgroundColor: barColorStyle(item.base_stat),
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    // backgroundColor: "red",
    // width: "100%",
    height: 5,
    borderRadius: 20,
  },
});
