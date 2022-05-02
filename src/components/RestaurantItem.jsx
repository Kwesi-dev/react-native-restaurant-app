import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { elevation } from "../commonStyles"
import React from "react"
export default function RestaurantItem({ item, navigation }){
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
            <View style={[styles.container, styles.elevation]}>
                <Image source={item.Image} style={styles.image}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>{item.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.rating}>{item.rating} stars</Text>
                        <Text style={styles.cash}>${item.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
        borderRadius: 50,
        backgroundColor:"white",
        flexDirection: "row",
        alignSelf: "stretch",
        height: 100,
        alignItems: "center"
    },
    elevation,
    image:{
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer:{
        paddingHorizontal: 10
    },
    header:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    },
    info:{
        flexDirection: "row"
    },
    rating:{
        marginRight: 20
    },
    cash:{
        color: "gold"
    }

})