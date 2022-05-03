import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { restaurants } from "../restaurantsData"
import React from "react"
import { FlatList } from "react-native"
import RestaurantItem from "./RestaurantItem"
export default function Restaurants({ navigation, selected }){
    const [loading, setLoading] = React.useState(false)
    const filteredRestaurants = restaurants.filter((restaurant) => restaurant.term === selected)
    React.useEffect(()=>{
        let componentMounted = true
        setLoading(true) 
        if(componentMounted){ 
            setTimeout(()=>{
                setLoading(false)
            }, 3000)
        }
        return () => {
            componentMounted = false
        }
    }, [])
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            {loading ? <ActivityIndicator size="large" marginHorizontal={100}/>
                :
                <FlatList
                data={filteredRestaurants}
                keyExtractor={(restaurant)=> restaurant.key}
                renderItem={({item}) => {
                    return <RestaurantItem item={item} navigation={navigation}/>
                    }}
                showsVerticalScrollIndicator={false}
                />
            }
            {filteredRestaurants.length === 0 && <Text style={styles.error}>No Restaurant found at the moment</Text>}
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 15,
        marginHorizontal: 25,
    },
    error:{
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40
    }
})