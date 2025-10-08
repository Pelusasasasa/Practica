import { Pokemon as PokemonInterface } from '@/core/pokemon/interface/Pokemon';
import { typeColors } from '@/helpers/colorPorTipo';
import PokemonCuerpo from '@/presentation/pokemons/components/PokemonCuerpo';
import PokemonHabilidades from '@/presentation/pokemons/components/PokemonHabilidades';
import PokemonStats from '@/presentation/pokemons/components/PokemonStats';
import { usePokemon } from '@/presentation/pokemons/hooks/usePokemon';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';

const colors = typeColors;

const Pokemon = () => {
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState({} as PokemonInterface);

    const { pokemonQuery } = usePokemon(`${id}`);

    useEffect(() => {
      if(pokemonQuery.data){  
        
        setPokemon(pokemonQuery.data)
      }
    }, [pokemonQuery.data]);


    if(!pokemonQuery.data){
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    }
    

  return (
    <View className='bg-gradient-to-br bg-[#5aa6ac] p-4 min-h-screen'>
        <View className='max-w-md mx-auto'>
          <Pressable className='py-2 items-center gap-2 flex-row' onPress={() => router.dismiss()}>
              <Ionicons name='arrow-back'/>
              <Text>Volver</Text>
          </Pressable>

          <View className='bg-[#008994] border border-transparent rounded-lg'>

            <View>
              <Image source={{uri: pokemon.sprites?.front_default}} className='w-72 h-72' />
              <Text className='text-3xl text-center text-white font-semibold'>{pokemon.name}</Text>
              <Text className='text-lg text-center text-gray-300 font-semibold'>#{pokemon.id?.toString().padStart(4, '0')}</Text>  
            </View>  

            <View className='p-2'>
              <Text className='text-xl text-white'>Tipos</Text>
              <View className='flex-row gap-2'>
                {pokemon?.types?.map((type, index) => (
                  <Text key={index} className={`text-gray-100 inline-flex items-center justify-center rounded-md border border-transparent font-medium w-fit whitespace-nowrap shrink-0 text-xs px-2 ${colors[type.type.name]}`}>{type.type.name}</Text>
                ))}
              </View>
            </View>


            <View className='flex-row gap-5 justify-center'>
              <PokemonCuerpo type='Altura' valor={pokemon.height} />
              <PokemonCuerpo type='Peso' valor={pokemon.weight} />
            </View>

                
              <View className='mt-7'>
                <PokemonStats estadisticas={pokemon.stats}/>
              </View>

              {/* Habilidades */}
              <View>
                <PokemonHabilidades habilidades={pokemon.abilities}/>
              </View>
          </View>
        </View>
    </View>
  )
}

export default Pokemon