import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native"
import { restaurants } from "../restaurantsData"
export default function Restaurantscreen({navigation, route}){
    const { id } = route.params
    const restaurantImages = restaurants.filter((restaurant) => restaurant.term === id)
    const { height, width } = Dimensions.get("window")
    const imgWidth = width
    const imgHeight = Math.round((height * 9)/16)
    return(
        <View>
            <FlatList
                data={restaurantImages}
                keyExtractor={(restaurant)=>restaurant.key}
                renderItem={({item})=>{
                    return <Image source={item.Image} style={{height: imgHeight, width: imgWidth}}/>
                }}
            />
        </View>
    )
}
