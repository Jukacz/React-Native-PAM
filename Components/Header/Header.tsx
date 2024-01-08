import React, {useEffect, useState} from "react";
import {Image, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {StackNavigationState, useNavigation} from "@react-navigation/native";
import {Button, Input} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faHeart} from "@fortawesome/free-solid-svg-icons";
import HeaderSearchInput from "./HeaderSearchInput";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";

type Props = {
    canGoBack?: boolean;
}

const Header: React.FC<Props> = ({canGoBack}) => {
    const [results, setResults] = useState([]);
    const navigation = useNavigation<NativeStackNavigationProp<RoutesType>>();

    return (
        <View style={styles.header}>
            {canGoBack ?
                <Button style={styles.header__backButton} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                :
                <Image style={styles.header__image} source={require("../../assets/img.png")}/>}
            <HeaderSearchInput />
            <Button style={styles.header__backButton} onPress={() => navigation.navigate("FavoriteScreen")}>
                <FontAwesomeIcon color={"red"} icon={faHeart} />
            </Button>
        </View>
    )
}



// styles

const styles = StyleSheet.create({
    header: {
        padding: 10,
        height: "auto",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header__image: {
        width: 50,
        height: 50,
    },
    header__backButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
});
export default Header;