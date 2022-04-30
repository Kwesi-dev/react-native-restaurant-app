import { View, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { elevation } from "../commonStyles"
export default function Search(){
    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25}/>
            <TextInput placeholder="Retaurant, food" style={styles.input}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 25,
        marginVertical: 5,
        borderRadius: 25,
        padding: 15
    },
    elevation,
    input:{
        marginLeft: 10,
        fontSize: 20
    }
})