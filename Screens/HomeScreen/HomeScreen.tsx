import {StyleSheet,ScrollView, Text, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";
import React, {useEffect, useState} from "react";
import {Character, Info} from "../../types";
import {requestToAPI} from "../../requestToAPI";
import Search from "../../Components/Search/Search";
import CharacterCard from "../../Components/Cards/CharacterCard/CharacterCard";

type Props = NativeStackScreenProps<RoutesType, "HomeScreen">


const HomeScreen: React.FC<Props> = ({navigation}) => {
    const [info, setInfo] = useState<Info>();
    const [characters, setCharacters] = useState<Character[]>();

    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("");


    const getCharacters = async (filter?: Record<string, any>) => {

        const response = await requestToAPI("/character", {searchParams: filter}).get().catch(err => err.response);

        if (response.status === 200) {
            setInfo(response.data.info);
            setCharacters(response.data.results);
        } else if (response.status === 404) {
            alert("No characters found")
        }
    }

    const navigateToCharacterScreen = (character: Character) => {
        navigation.navigate("CharacterScreen", {
            character
        })
    }

    useEffect(() => {
        getCharacters({
            name: search,
            status: filter
        })
    }, [search, filter]);

    return (
        <ScrollView style={styles.container}>
            <Search onSubmit={(search) => setSearch(search)} onFilterChange={filter => setFilter(filter)}/>
            <View style={styles.cardsBox}>
                {characters?.map((character, index) =>
                    <CharacterCard onPress={navigateToCharacterScreen} key={index} character={character} />
                )}
            </View>
        </ScrollView>
    )
}

// styles

const styles = StyleSheet.create({
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

export default HomeScreen;
