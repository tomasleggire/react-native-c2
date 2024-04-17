import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

interface Props {
  id: any;
}

export default function Favorite(props: Props) {
  const { id } = props;

  const addFavorite = () => {
    console.log("Añadir a favoritos el pokemon " + id);
  };

  return <Icon name="heart" color="#fff" size={20} onPress={addFavorite} />;
}
