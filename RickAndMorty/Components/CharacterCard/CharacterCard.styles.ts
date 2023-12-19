import {StyleSheet} from "react-native";

export const characterCardStyles = StyleSheet.create({
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