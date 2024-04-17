import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite } from "../../api/favorite";

interface Props {
  id: any;
}

export default function Favorite(props: Props) {
  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavorite(id);
  };

  return <Icon name="heart" color="#fff" size={20} onPress={addFavorite} />;
}
