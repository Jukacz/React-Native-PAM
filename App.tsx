import {RoutesType} from "./Routes";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import {NativeBaseProvider} from "native-base";
import CharacterScreen from "./Screens/CharacterScreen/CharacterScreen";
import FavoriteScreen from "./Screens/FavoriteScreen/FavoriteScreen";
import {Provider} from "react-native-paper";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator<RoutesType>();
const Drawer = createDrawerNavigator<RoutesType>();
export default function App() {
    // @ts-ignore
    return (
        <Provider>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={{
                        headerShown: false,
                        animation: "fade_from_bottom",
                        contentStyle: {
                            backgroundColor: "white",
                        }
                    }}>
                        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                        <Stack.Screen name="CharacterScreen" component={CharacterScreen}/>
                        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    )
}
