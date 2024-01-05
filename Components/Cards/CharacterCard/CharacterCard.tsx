import React, {useEffect, useState} from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import {Character} from "../../../types";
import {OpenSans_300Light, useFonts} from "@expo-google-fonts/open-sans";
import StatusTag from "../../StatusTag/StatusTag";
import GenderTag from "../../GenderTag/GenderTag";
import {useNavigation} from "@react-navigation/native";
import {requestToAPI} from "../../../requestToAPI";

type PropsWithCharacter = {
    character: Character;
    onPress?: (character: Character) => any;
    url?: never;
}

type PropsWithUrl = {
    character?: never;
    onPress?: (character: Character) => any;
    url: string
}

const CharacterCard: React.FC<PropsWithCharacter | PropsWithUrl> = ({character, onPress, url}) => {
    const [characterState, setCharacterState] = useState<Character>(character || {} as Character);

    const navigation = useNavigation();

    const getCharacterInfo = async () => {
        if (!url) return
        const response = await requestToAPI(url, {withoutBaseUrl: true}).get().catch(err => err.response);

        if (response.status == 200) {
            setCharacterState(response.data)
            return
        }
    }

    useEffect(() => {
        getCharacterInfo()
    }, []);

    const [fontsLoaded] = useFonts({
        OpenSans_300Light
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <TouchableOpacity onPress={() => onPress && onPress(characterState)} style={styles.container}>
            <Image style={styles.imageStyle} source={{
                uri: characterState.image
            }}/>
            <View style={styles.dataContainer}>
                <Text style={styles.characterName}>{characterState.name}</Text>
                <View style={styles.tags}>
                    <StatusTag status={characterState.status}/>
                    <GenderTag gender={characterState.gender}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

// styles

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 2,
        borderRadius: 10,
    },

    imageStyle: {
        height: 100,
        width: 100,
    },

    characterName: {
        fontFamily: "OpenSans_300Light",
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: "600"
    },

    dataContainer: {
        flexDirection: "column",
        width: "auto",
    },
    tags: {
        flexDirection: "row",
        gap: 10,
    }
})

export default CharacterCard