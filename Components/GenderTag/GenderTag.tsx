import {genderTagStyles} from "./GenderTag.styles";
import React from "react";
import {Text} from "react-native";
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

export default GenderTag