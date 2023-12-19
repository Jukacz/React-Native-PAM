import {statusTagStyles} from "./StatusTag.styles";
import React from "react";
import {Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSkull, faHeart, faQuestion} from "@fortawesome/free-solid-svg-icons";

type Props = {
    status: "Alive" | "Dead" | "unknown"
}

const StatusTag: React.FC<Props> = ({status}) => {

    return (
            <Text style={statusTagStyles.statusTag}>
                <FontAwesomeIcon style={statusTagStyles.icon} icon={
                status === "Alive" ? faHeart : (status === "Dead" ? faSkull : faQuestion)
                } />
                <Text>{status}</Text>
            </Text>
    )
}

export default StatusTag