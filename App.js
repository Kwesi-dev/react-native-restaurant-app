import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import React from 'react';

export default function App() {
  const [ selected, setSelected ] = React.useState("")
  const CategoryItems = [
    {
      name: "Pizza",
      imageURL: require("./src/assets/pizza.png")
    },
    {
      name: "Burger",
      imageURL: require("./src/assets/burger.png")
    },
    {
      name: "Dessert",
      imageURL: require("./src/assets/smoothies.png")
    },
    {
      name: "Pasta",
      imageURL: require("./src/assets/pasta.png")
    },
    {
      name: "Steak",
      imageURL: require("./src/assets/steak.png")
    },
    {
      name: "Cake",
      imageURL: require("./src/assets/cake.png")
    },
  ]
  console.log(selected)
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <FlatList
        data={CategoryItems}
        renderItem={({item, index})=> {
          return <CategoryItem item={item} index={index} handlePress={()=>setSelected(item.name)} active={selected === item.name}/>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
