import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import home_screem_styles from "./HomeScreen.styles";
import { Button } from "react-native-paper";

type RootStackParamList = {
  Home: undefined;
  SecondTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={home_screem_styles.container}>
      <Text style={home_screem_styles.text}>Pokedex</Text>
      <Button
        style={home_screem_styles.button}
        onPress={() => navigation.navigate("Pokedex")}
        textColor="white"
      >
        Go to Second Tab
      </Button>
    </View>
  );
};

export default HomeScreen;
