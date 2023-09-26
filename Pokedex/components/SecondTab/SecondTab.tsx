import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ImageBackground, Text, View } from "react-native";
import view_styles from "./SecondTab.styles";

type RootStackParamList = {
  Home: undefined;
  SecondTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const SecondTab = ({ navigation }: Props) => {
  return (
    <View style={view_styles.container}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/200/300" }}
        resizeMode="cover"
        style={view_styles.image}
      >
        <Text>Second Tab</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </ImageBackground>
    </View>
  );
};
export default SecondTab;
