import { View, Text, StyleSheet } from "react-native"
const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.lightheader}>Grab your</Text>
        <Text style={styles.boldheader}>delicious meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        marginTop: 20
    },
    lightheader:{
        fontSize: 25
    },
    boldheader:{
        fontSize: 25,
        fontWeight: "bold"
    }
})
export default Header

