import {StyleSheet} from "react-native";

export const searchStyles = StyleSheet.create({
    searchView: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
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

    selectItem: {
        color: "red",
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
})