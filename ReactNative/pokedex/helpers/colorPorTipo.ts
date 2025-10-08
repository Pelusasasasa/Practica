import { Type } from "@/core/pokemon/interface/Pokemon";


export const colorPorTipo = (type: Type) => {
    switch (type.type.name) {
        case  'water':
            return {
                fondo: 'bg-blue-500',
                icon: 'water-outline'
            };
        case 'fire':
            return {
                fondo: 'bg-red-500',
                icon: 'flame-outline'
            };
        case 'grass':
            return {
                fondo: 'bg-green-500',
                icon: 'leaf-outline'
            };
        case 'bug':
            return {
                fondo: 'bg-violet-500',
                icon: 'bug-outline'
            };
        case 'poison':
            return {
                fondo: 'bg-violet-500',
                icon: 'bug-outline'
            };
        case 'fighting':
            return {
                fondo: 'bg-amber-500',
                icon: 'barbell-outline'
            };
        case 'electric':
            return {
                fondo: 'bg-yellow-500',
                icon: 'flash-outline'
            };
        default:
            return {
                fondo: 'bg-gray-500',
                icon: ''
            }
    }
};

export const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-green-400",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
}