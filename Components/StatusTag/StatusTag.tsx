import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSkull, faHeart, faQuestion} from "@fortawesome/free-solid-svg-icons";

type Props = {
    status: "Alive" | "Dead" | "unknown"
}

const StatusTag: React.FC<Props> = ({status}) => {

    return (
        <View style={statusTagStyles.statusTag}>
            <FontAwesomeIcon icon={
                status === "Alive" ? faHeart : (status === "Dead" ? faSkull : faQuestion)
            }/>
            <Text>{status}</Text>
        </View>
    )
}

const statusTagStyles = StyleSheet.create({
    statusTag: {
        textTransform: "capitalize",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        padding: 10,
        backgroundColor: "#f0efed",
        borderRadius: 100
    },
    icon: {
    },
})
export default StatusTag