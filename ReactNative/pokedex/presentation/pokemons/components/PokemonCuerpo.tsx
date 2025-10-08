import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    type: string;
    valor: number
}

const PokemonCuerpo = ({ type, valor}: Props) => {
  return (
    <View className='bg-white rounded-lg p-5'>
      <Text className='text-center text-gray-500'>{type}</Text>
      <Text className='text-center font-bold text-gray-700'>{valor}</Text>
    </View>
  )
}

export default PokemonCuerpo