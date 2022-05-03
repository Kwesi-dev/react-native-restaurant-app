import Homescreen from "./src/screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurantscreen from "./src/screens/Restaurantscreen";
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" component={Homescreen} options={{title: "Homepage"}}/>
        <Stack.Screen  name="Restaurant" component={Restaurantscreen} options={{title: "Restaurant page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
