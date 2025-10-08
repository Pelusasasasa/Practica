import { Ability } from '@/core/pokemon/interface/Pokemon';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    habilidades: Ability[]
};

const PokemonHabilidades = ({habilidades}: Props) => {
  return (
    <View className='flex-row gap-3 p-2'>
      {habilidades?.map((habilidad, index) => (
        <Text className='text-white bg-violet-500 px-2 py-1 rounded-full' key={index}>{habilidad.ability?.name}</Text>
      ))}
    </View>
  )
}

export default PokemonHabilidades