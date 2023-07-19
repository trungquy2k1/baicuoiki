import React from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import Item, {ItemData} from './Item';
//import MenuImage from '../menubutton/menubutton';
const data: ItemData[] = [
  {id: '1', image: require('./sp/anh1.jpg'), content: 'Oatmeal cookies'},
  {id: '2', image: require('./sp/banh2.jpg'), content: 'Pumkin cookies'},
  {id: '3', image: require('./sp/anh3.jpg'), content: 'Pumkin cookies'},
  {id: '4', image: require('./sp/banh3.jpg'), content: 'Brownies'},
  {id: '5', image: require('./sp/banh5.jpg'), content: 'Chicken Fajitas'},
  {id: '6', image: require('./sp/banh6.jpg'), content: 'Buffalo pizza'},
  {id: '7', image: require('./sp/banh7.jpg'), content: 'Classic Lasagna'},
  {id: '8', image: require('./sp/banh8.jpg'), content: 'Pineapple Tarts'},
];

const HomeScreen = () => {
 
  const renderItem = ({item}: {item: ItemData}) => (
    <TouchableOpacity>
      <Item id={item.id} image={item.image} content={item.content} />
    </TouchableOpacity>
  );
  


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
