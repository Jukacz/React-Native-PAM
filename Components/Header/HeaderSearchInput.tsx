import React, {createRef, useEffect, useState} from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput, Touchable,
    TouchableHighlight, TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {requestToAPI} from "../../requestToAPI";
import {Character} from "../../types";
import {Portal} from "react-native-paper";
import CharacterMiniCard from "../Cards/CharacterMiniCard/CharacterMiniCard";
import {RouteProp, useNavigation, useRoute, useScrollToTop} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";

const HeaderSearchInput: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [results, setResults] = useState<Character[]>([]);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const scrollViewRef = createRef<ScrollView>()

    const navigation = useNavigation<NativeStackNavigationProp<RoutesType>>();

    const route = useRoute<RouteProp<RoutesType>>();

    const moveToCharacterScreen = (character: Character) => {
        navigation.navigate("CharacterScreen", {character});
        clearResults();
    }


    const getCharacters = async (name: string) => {
        if (!name) {
            setResults([]);
            return
        }
        const response = await requestToAPI("/character", {searchParams: {name}}).get().catch(err => err.response);

        if (response.status === 200) {
            setResults(response.data.results);
        } else {
            setResults([]);
        }
    }

    useEffect(() => {
        getCharacters(search);
    }, [search]);

    const clearResults = () => {
        setResults([]);
    }

    return (
        <View style={styles.searchInput}>
            <TextInput style={styles.searchInput__input} placeholder={"Search"}
                       onChangeText={text => setSearch(text)} value={search}
            />
            <Portal>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}
                            style={styles.searchInput__results}>
                    <View style={{alignItems: "center"}}>
                        {results.map((result, key) => {
                            return <CharacterMiniCard key={result.id} onPress={moveToCharacterScreen}
                                                      character={result}/>
                        })}
                    </View>
                </ScrollView>
            </Portal>
        </View>
    )
}

// styles

const styles = StyleSheet.create({
    searchInput: {
        width: 250,
    },
    searchInput__input: {
        padding: 10,
        backgroundColor: "#f0efed",
        borderRadius: 100,
    },
    searchInput__results: {
        position: "absolute",
        top: 115,
        zIndex: 100,
        maxHeight: 300,
        gap: 10,
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: 10,
    }
});

export default HeaderSearchInput