import { Stat } from '@/core/pokemon/interface/Pokemon';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    estadisticas: Stat[]
}

const PokemonStats = ({estadisticas}: Props) => {
    
  return (
    <View>
        {estadisticas?.map((estadistica, index) => (
            
            <View className='flex-row items-center gap-3' key={index}>
                <Text className='text-white text-sm w-20 font-medium '>{estadistica.stat.name.toUpperCase()}</Text>

                    <View className='flex-1 h-2 rounded-full bg-[#f8f8f8]'>
                        <View className='h-2 rounded-full transition-all duration-300 bg-red-500' style={{width: `${Math.min((estadistica.base_stat / 150) * 100, 100)}%`}}></View>
                    </View>
                <Text className='text-white text-sm w-8 font-semibold '>{estadistica.base_stat}</Text>
            </View>
        
        ))}
    </View>
  )
}

export default PokemonStats