import { Pokemon } from '@/core/pokemon/interface/Pokemon'
import { Result } from '@/core/pokemon/interface/PokemonsResponse'
import { typeColors } from '@/helpers/colorPorTipo'
import axios from 'axios'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Pressable, Text, View } from 'react-native'

interface Props {
    url: Result
};
const { width } = Dimensions.get('window');

const PokedexCard = ({url}: Props) => {
    const colors = typeColors;

    const [pokemon, setPokemon] = useState<Pokemon>();

    const traerDato = async(url: string) => {
        const { data }= await axios.get(url);
        setPokemon(data)
    };

    const navegar = () => {
        router.push({
            pathname: '/pokemon/[id]',
            params: {id: pokemon?.id.toString() ?? 0}
        })
    }

    useEffect(() => {
        traerDato(url.url);
    }, []);

    if(!pokemon){
        return (
            <View style={{width: width / 2 - 10}}>
                <ActivityIndicator/>
            </View>
        )
    };
    
  return (
    <Pressable className='rounded-lg' style={{width: width / 2 - 30}} onPress={navegar}>
        <View className={`justify-center rounded-lg items-center pb-5 bg-[#008994]`}>
            <Image source={{uri: pokemon.sprites.front_default}} className='w-20 h-20'/>
            <Text className='py-5 text-gray-100 font-semibold'>{pokemon?.name}</Text>
            <Text className='text-gray-100 font-semibold'>{pokemon?.id?.toString().padStart(4,'#0000')}</Text>
            <View className='flex-row justify-center gap-1'>
                {
                pokemon?.types.map((type, index) => (
                    <Text key={index} className={`text-gray-100 inline-flex items-center justify-center rounded-md border border-transparent font-medium w-fit whitespace-nowrap shrink-0 text-xs px-2 ${colors[type.type.name]}`}>{type.type.name}</Text>
                ))
            }
            </View>
        </View>
    </Pressable>
  )
}

export default PokedexCard