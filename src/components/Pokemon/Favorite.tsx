import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite, isPokemonFavorite } from "../../api/favorite";

interface Props {
  id: any;
}

export default function Favorite(props: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);

  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavorite(id);
  };

  const removeFavorite = () => {
    console.log("Eliminar de favoritos");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorite(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  return (
    <Icon
      name="heart"
      color="#fff"
      solid={isFavorite}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  );
}
