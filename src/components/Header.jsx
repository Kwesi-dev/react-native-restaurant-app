import { View, Text, StyleSheet } from "react-native"
const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.lightheader}>Grab your</Text>
        <Text style={styles.boldheader}>Delicious meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 25,
        marginTop: 50
    },
    lightheader:{
        fontSize: 30
    },
    boldheader:{
        fontSize: 30,
        fontWeight: "Bold"
    }
})
export default Header

