import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { restaurants } from "../restaurantsData"
import React from "react"
import { FlatList } from "react-native"
import RestaurantItem from "./RestaurantItem"
export default function Restaurants({ navigation }){
    const [loading, setLoading] = React.useState(false)
    
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
                data={restaurants}
                keyExtractor={(restaurant)=> restaurant.key}
                renderItem={({item}) => {
                    return <RestaurantItem item={item} navigation={navigation}/>
                    }}
                />
            }
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 15
    }
})