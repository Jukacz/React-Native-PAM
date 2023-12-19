import {RoutesType} from "./Routes";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import {NativeBaseProvider} from "native-base";

const Stack = createNativeStackNavigator<RoutesType>();
export default function App() {
  return (
      <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  )
}
