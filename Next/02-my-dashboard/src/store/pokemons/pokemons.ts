import { Pokemon } from "@/src/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: { [key: string]: Pokemon };
}

const getInitialState = (): PokemonsState => {
  if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") || "{}"
  );
  return favorites;
};

const initialState: PokemonsState = {
  favorites: {},
  //...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritesPokemons: (
      state,
      action: PayloadAction<{ [key: string]: Pokemon }>
    ) => {
      state.favorites = action.payload;
    },

    toogleFavorite: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;

      if (!!state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
      } else {
        state.favorites[pokemon.id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toogleFavorite, setFavoritesPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
