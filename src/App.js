import React from 'react'
import {SafeAreaView, View, Text, ScrollView, FlatList} from 'react-native'

import {Data, MenuView } from './components'

const data = Data

const App = () => {
  return(
    <SafeAreaView style= {{flex: 1}}>
      <FlatList
        style= {{flex: 1}}
        keyExtractor= {(item, index) => index.toString()}
        data= {data}
        renderItem = {({item}) => 
        <MenuView 
          RestLoc = {item.location}
          RestName = {item.name}
          RestImage = {item.image}
          RestLike = {item.likes}
          RestHot = {item.isPopular}
        />}
      />
    </SafeAreaView>
  );
};

export default App;