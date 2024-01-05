import {RoutesType} from "./Routes";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import {NativeBaseProvider} from "native-base";
import CharacterScreen from "./Screens/CharacterScreen/CharacterScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator<RoutesType>();
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                    <Stack.Screen name="CharacterScreen" component={CharacterScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}
