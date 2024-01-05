import React from "react";
import {StyleSheet, Text} from "react-native";
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
            }/>
            <Text>{status}</Text>
        </Text>
    )
}

const statusTagStyles = StyleSheet.create({
    statusTag: {
        textTransform: "capitalize",
        flexDirection: "row",
        width: 90   ,
        gap: 5,
        backgroundColor: "#f0efed",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    icon: {
        paddingTop: 10,
    },
})
export default StatusTag