import { StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import React from 'react';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
export default function Homescreen({ navigation }){
   const [ selected, setSelected ] = React.useState("Pizza")
   const CategoryItems = [
    {
      name: "Pizza",
      imageURL: require("../../src/assets/pizza.png")
    },
    {
      name: "Burger",
      imageURL: require("../../src/assets/burger.png")
    },
    {
      name: "Dessert",
      imageURL: require("../../src/assets/smoothies.png")
    },
    {
      name: "Pasta",
      imageURL: require("../../src/assets/pasta.png")
    },
    {
      name: "Steak",
      imageURL: require("../../src/assets/steak.png")
    },
    {
      name: "Cake",
      imageURL: require("../../src/assets/cake.png")
    },
  ]
    return(
        <View style={styles.container}>
            <Header/>
            <Search setSelected={setSelected}/>
            <Categories setSelected={setSelected} selected={selected} CategoryItems={CategoryItems}/>
            <Restaurants navigation={navigation} selected={selected}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(247, 233, 233)",
    },
})