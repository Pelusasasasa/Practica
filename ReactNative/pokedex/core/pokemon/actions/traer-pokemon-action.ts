import { pokedexApi } from "@/core/api/pokedexApi";
import { Pokemon } from "../interface/Pokemon";

export const traerPokemon = async(id: string) => {
    try {
        const { data } = await pokedexApi.get<Pokemon>(`/${id}`);
        return data
    } catch (error) {
        console.log(error);
        throw new Error('Unabled to load pokemons')
    }
}