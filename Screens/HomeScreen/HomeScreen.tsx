import {ScrollView, Text, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";
import React, {useEffect, useState} from "react";
import {Character, Info} from "../../types";
import {requestToAPI} from "../../requestToAPI";
import {homeScreenStyles} from "./HomeScreen.styles";
import Search from "../../Components/Search/Search";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";

type Props = NativeStackScreenProps<RoutesType, "HomeScreen">

const HomeScreen: React.FC<Props> = () => {
    const [info, setInfo] = useState<Info>();
    const [characters, setCharacters] = useState<Character[]>();

    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("");

    const get_characters = async (filter?: Record<string, any>) => {

        const response = await requestToAPI("/character", filter).get().catch(err => err.response);

        console.log(filter)


        if (response.status === 200) {
            setInfo(response.data.info);
            setCharacters(response.data.results);
        } else if (response.status === 404) {
            alert("No characters found")
        }
    }

    useEffect(() => {
        get_characters({
            name: search,
            status: filter
        })
    }, [search, filter]);

    return (
        <ScrollView style={homeScreenStyles.container}>
            <Search onSubmit={(search) => setSearch(search)} onFilterChange={filter => setFilter(filter)} />
            <View style={homeScreenStyles.cardsBox}>
            {characters?.map((character, index) => <CharacterCard key={index} character={character} />)}
            </View>
        </ScrollView>
    )
}

export default HomeScreen;
