import { Pokemon, PokemonGrid, Pokemons } from "@/src/pokemons";
import { FavoritePokemons } from "@/src/pokemons/components/FavoritePokemons";
import { IoHeadsetOutline } from "react-icons/io5";

export const metadata = {
  title: "Favoritos",
  description: "Listado de Pokemons",
};

const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-blue-500">
        Pokemons Favoritos <small>Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
};

export default PokemonsPage;
