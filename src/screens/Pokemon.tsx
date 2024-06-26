import React, { useState, useEffect } from "react";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemons";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

interface Props {
  navigation: any;
  route: any;
}

export default function Pokemon(props: Props) {
  const [pokemon, setPokemon] = useState<any>(null);
  const { user } = useAuth();

  const {
    navigation,
    route: { params },
  } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => user && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(pokemon);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
