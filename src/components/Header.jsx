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
        marginHorizontal: 25,
        marginTop: 50
    },
    lightheader:{
        fontSize: 35
    },
    boldheader:{
        fontSize: 35,
        fontWeight: "Bold"
    }
})
export default Header

