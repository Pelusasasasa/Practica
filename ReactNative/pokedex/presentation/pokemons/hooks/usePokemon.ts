import { traerPokemon } from "@/core/pokemon/actions/traer-pokemon-action";
import { useQuery } from "@tanstack/react-query";

export const usePokemon = (pokemonId: string) => {
    const pokemonQuery = useQuery({
        queryKey: ['pokemonId', pokemonId],
        staleTime: 1000 * 60 * 5,
        queryFn: (id) => traerPokemon(pokemonId)
    });

    return {
        pokemonQuery
    }
}