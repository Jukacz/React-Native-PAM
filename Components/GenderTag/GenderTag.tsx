import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMars, faVenus, faQuestion} from "@fortawesome/free-solid-svg-icons";

type Props = {
    gender: "Male" | "Female" | "Genderless" | "unknown";
}

const GenderTag: React.FC<Props> = ({gender}) => {
    const icon_selection = ({gender}: Props) => {
        switch (gender) {
            case "Female":
                return faVenus;
            case "Male":
                return faMars;
            default:
                return faQuestion;
        }
    }
    return (
        <View style={genderTagStyles.genderTag}>
            <FontAwesomeIcon icon={icon_selection({
                gender: gender
            })}/>
            <Text>{gender}</Text>
        </View>
    )
}

const genderTagStyles = StyleSheet.create({
    genderTag: {
        padding: 10,
        textTransform: "capitalize",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        backgroundColor: "#f0efed",
        borderRadius: 100
    },
})

export default GenderTag