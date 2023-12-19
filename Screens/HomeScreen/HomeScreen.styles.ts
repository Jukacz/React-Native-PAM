import {StyleSheet} from "react-native";

export const homeScreenStyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    searchView: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginBottom: 20,
    },
    inputSearch: {
        padding: 10,
        width: "80%",
        borderRadius: 5,
    },
    buttonsContainer: {
        gap: 10,
        flexDirection: "row",
    },
    buttonSearch: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    cardsBox: {
        gap: 20,
        padding: 5,
        marginBottom: 20,
    }
})