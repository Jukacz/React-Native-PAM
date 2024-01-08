import {Character} from "../../../types";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RoutesType} from "../../../Routes";

type Props = {
    character: Character;
    onPress?: (character: Character) => void;
}

const CharacterMiniCard: React.FC<Props> = ({character, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => onPress && onPress(character)} style={styles.card}>
            <Text style={styles.card__typeOfCard}>Character</Text>
            <Text style={styles.card__title}>{character.name}</Text>
            <View>
                <Text>{character.species} | {character.status}</Text>
            </View>
        </TouchableOpacity>
    )
}

// styles

const styles = StyleSheet.create({
    card: {
        width: 250,
        backgroundColor: "white",
        padding: 10,
    },
    card__typeOfCard: {
        fontSize: 10,
        color: "gray",
    },
    card__title: {
        fontSize: 15,
        fontWeight: "bold",
    },
})

export default CharacterMiniCard;