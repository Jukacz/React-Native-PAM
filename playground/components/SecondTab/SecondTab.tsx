import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import view_styles from "./SecondTab.styles";

type RootStackParamList = {
  Home: undefined;
  SecondTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const SecondTab = ({ navigation }: Props) => {
  return (
    <View style={view_styles.container}>
      <Text>Second Tab</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
export default SecondTab;
