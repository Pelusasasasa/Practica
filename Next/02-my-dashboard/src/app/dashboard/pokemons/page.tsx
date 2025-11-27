import { Pokemon, PokemonGrid, Pokemons } from "@/src/pokemons";

export const metadata = {
  title: "Listado de Pokemons",
  description: "Listado de Pokemons",
};

const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
  const data: Pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-blue-500">
        Listado de Pokemons <small>estatico</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
