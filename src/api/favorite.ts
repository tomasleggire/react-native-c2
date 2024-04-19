import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constans";

export async function getPokemonsFavorite() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavorite(id: number) {
  try {
    const favorites = await getPokemonsFavorite();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavorite(id: number) {
  try {
    const response = await getPokemonsFavorite();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavorite(id: number) {
  try {
    const favorites = await getPokemonsFavorite();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
