import { Result } from '@/core/pokemon/interface/PokemonsResponse';
import React from 'react';
import { FlatList } from 'react-native';
import PokedexCard from './PokedexCard';

interface Props {
  pokemones: Result[];
  loadNextPage: () => void;
}

const PokedexList = ({pokemones, loadNextPage}: Props) => {
  return (
      <FlatList
      data={pokemones}
      keyExtractor={(item: Result) => item.name}
      renderItem={({item}) => <PokedexCard url={item}/>}

      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}


      numColumns={2}
      columnWrapperStyle={{gap: 10}}
      contentContainerClassName='mx-2'
      contentContainerStyle={{ gap: 50}}
      />
  )
}

export default PokedexList