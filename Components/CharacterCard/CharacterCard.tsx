import {characterCardStyles} from "./CharacterCard.styles";
import React from "react";
import {Text, View, Image} from "react-native";
import {Character} from "../../types";
import {OpenSans_300Light, useFonts} from "@expo-google-fonts/open-sans";
import StatusTag from "../StatusTag/StatusTag";
import GenderTag from "../GenderTag/GenderTag";

type Props = {
    character: Character;
}

const CharacterCard: React.FC<Props> = ({character}) => {
    const [fontsLoaded] = useFonts({
        OpenSans_300Light
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={characterCardStyles.container}>
            <Image style={characterCardStyles.imageStyle} source={{
                uri: character.image
            }} />
            <View style={characterCardStyles.dataContainer}>
                <Text style={characterCardStyles.characterName}>{character.name}</Text>
                <View style={characterCardStyles.tags}>
                    <StatusTag status={character.status} />
                    <GenderTag gender={character.gender} />
                </View>
            </View>
        </View>
    )
}

export default CharacterCard