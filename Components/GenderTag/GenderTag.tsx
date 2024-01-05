import React from "react";
import {StyleSheet, Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMars, faVenus, faQuestion} from "@fortawesome/free-solid-svg-icons";

type Props = {
    gender: "Male" | "Female" | "unknown";
}

const GenderTag: React.FC<Props> = ({gender}) => {
    const icon_selection = ({gender}: Props) => {
        switch (gender) {
            case "unknown":
                return faQuestion;
            case "Female":
                return faVenus;
            case "Male":
                return faMars;
        }
    }
    return (
        <Text style={genderTagStyles.genderTag} >
            <FontAwesomeIcon icon={icon_selection({
                gender: gender
            })} />
            <Text>{gender}</Text>
        </Text>
    )
}

const genderTagStyles = StyleSheet.create({
    genderTag: {
        textTransform: "capitalize",
        flexDirection: "row",
        width: 90,
        gap: 5,
        backgroundColor: "#f0efed",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
})

export default GenderTag