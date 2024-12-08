import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import Search from "./screens/Search";
import RestaurentDetails from "./screens/RestaurentDetails";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
// npm install --save react-native-responsive-dimensions
const Stack = createStackNavigator();

const AppNavigator = () =>{ 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Splash} name="Splash" options={{headerShown: false}} /> 
                <Stack.Screen component={Login} name="Login" options={{headerShown: false}} /> 
                <Stack.Screen component={MainScreen} name="MainScreen" options={{headerShown: false}} /> 
                <Stack.Screen component={Profile} name="Profile" options={{headerShown: false}} /> 
                <Stack.Screen component={Search} name="Search" options={{headerShown: false}} /> 
                <Stack.Screen component={RestaurentDetails} name="RestaurentDetails" options={{headerShown: false}} /> 
                <Stack.Screen component={Cart} name="Cart" options={{headerShown: false}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator