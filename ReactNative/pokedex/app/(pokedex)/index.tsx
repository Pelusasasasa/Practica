import PokedexList from '@/presentation/pokedex/components/PokedexList'
import { usePokemons } from '@/presentation/pokemons/hooks/usePokemons'
import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, View } from 'react-native'

const Index = () => {

  const {loadNextPage, pokemonsQuery } = usePokemons()
  const [search, setSearch] = useState('');
  
  if(pokemonsQuery.isLoading) return (
    <View className='flex-1, justify-center items-center'>
      <ActivityIndicator size={30} />
    </View>
  );

  const allPokemons = pokemonsQuery.data?.pages.flatMap(page => page) ?? [];

  const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(search.toLowerCase()));

  return (
    <View className='justify-center min-h-screen bg-gradient-to-br bg-[#5aa6ac] p-4'>
      <View className='text-center mb-6'>
        <Text className='text-4xl font-bold text-center text-[#3a3a3a]'>Pokedex</Text>
        <Text className='text-[#3a3a3a] text-center'>Descubre todos los pokemones</Text>

      </View>
      <TextInput value={search} onChangeText={setSearch} className=' my-5 backdrop-blur-sm bg-[#c8d7d8] border rounded-lg border-transparent' placeholder='Buscar Pokemon...'/>
      <PokedexList pokemones={filteredPokemons} loadNextPage={loadNextPage}/>
    </View>
  )
}

export default Index


