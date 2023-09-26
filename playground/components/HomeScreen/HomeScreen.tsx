import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  SecondTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Second Tab"
        onPress={() => navigation.navigate("SecondTab")}
      />
    </View>
  );
};

export default HomeScreen;
