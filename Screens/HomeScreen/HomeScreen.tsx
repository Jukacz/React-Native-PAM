import {StyleSheet, ScrollView, Text, TextInput, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";
import React, {useEffect, useRef, useState} from "react";
import {Character, Info} from "../../types";
import {requestToAPI} from "../../requestToAPI";
import CharacterCard from "../../Components/Cards/CharacterCard/CharacterCard";
import Header from "../../Components/Header/Header";
import {Button} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoriteScreen from "../FavoriteScreen/FavoriteScreen";

type Props = NativeStackScreenProps<RoutesType, "HomeScreen">

const Drawer = createDrawerNavigator<RoutesType>();

const HomeScreen: React.FC<Props> = ({navigation}) => {
    const [info, setInfo] = useState<Info>();
    const [characters, setCharacters] = useState<Character[]>();

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("");


    const scrollViewRef = useRef<ScrollView>(null);


    const getCharacters = async (filter?: Record<string, any>) => {

        const response = await requestToAPI("/character", {searchParams: filter}).get().catch(err => err.response);

        if (response.status === 200) {
            setCharacters([])
            setInfo(response.data.info);
            setCharacters(response.data.results);
        } else if (response.status === 404) {
            alert("No characters found")
        }
    }

    const nextPage = async () => {
        if (info?.next) {
            await getCharacters({page: currentPage + 1})
            setCurrentPage(currentPage + 1);
        }
    }

    const previousPage = async () => {
        if (info?.prev) {
            await getCharacters({page: currentPage - 1})
            setCurrentPage(currentPage - 1);
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
        <>
            <SafeAreaView style={{marginBottom: 70}}>
                <Header/>
                <ScrollView ref={scrollViewRef} style={styles.container}>
                    <View style={styles.cardsBox}>
                        {characters?.map((character, index) =>
                            <CharacterCard onPress={navigateToCharacterScreen} key={index} character={character}/>
                        )}
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button style={styles.button} disabled={!info?.prev} onPress={previousPage}>
                            <FontAwesomeIcon color={"white"} icon={faArrowLeft}/>
                        </Button>
                        <Text>{currentPage} from {info?.pages}</Text>
                        <Button style={styles.button} onPress={nextPage}>
                            <FontAwesomeIcon color={"white"} icon={faArrowRight}/>
                        </Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

// styles

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
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
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    cardsBox: {
        gap: 20,
        padding: 5,
        marginBottom: 20,
    }
})

export default HomeScreen;
