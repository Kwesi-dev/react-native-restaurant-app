import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { elevation } from "../commonStyles"
export default function CategoryItem({item, index, active, handlePress}){
    return(
        <TouchableOpacity onPress={()=>handlePress()}>
            <View style={[styles.container, styles.elevation, index === 0 ? { marginLeft: 25} : {marginLeft: 10}, active ? {backgroundColor: "rgb(241, 186, 87)"}: {backgroundColor: "white"}]}>
                <View style={styles.ImageContainer}>
                    <Image source={item.imageURL} style={styles.image}/>
                </View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 100,
        backgroundColor: "white",
        borderRadius: 50,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center"
    }, 
    elevation,
    image:{
        height: 30,
        width: 30,
    },
    ImageContainer:{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5
    },
    header:{
        fontWeight: "bold"
    }
})