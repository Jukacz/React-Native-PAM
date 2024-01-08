import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {RoutesType} from "../../Routes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Header from "../../Components/Header/Header";
import {getAllCharactersFromStorage} from "../../AsyncStorage";
import {Character} from "../../types";
import CharacterCard from "../../Components/Cards/CharacterCard/CharacterCard";
import {useFonts, OpenSans_300Light} from "@expo-google-fonts/open-sans";
import {SafeAreaView} from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RoutesType, "FavoriteScreen">

const FavoriteScreen: React.FC<Props> = ({navigation}) => {
    const [charactersUrl, setCharactersUrl] = useState<string[]>();

    const [fontsLoaded] = useFonts({
        OpenSans_300Light
    })

    const getAllCharacters = async () => {
        const storageCharactersUrls = await getAllCharactersFromStorage();

        setCharactersUrl(storageCharactersUrls);
    }

    const moveToCharacterScreen = (character: Character) => {
        navigation.navigate("CharacterScreen", {
            character
        })

    }

    useEffect(() => {
        getAllCharacters();
    }, []);


    return (
            <SafeAreaView style={{marginBottom: 70}}>
                <Header canGoBack={true}/>
                <ScrollView style={styles.favoriteScreen}>
                    <View style={styles.favoriteScreen__titleSection}>
                        <Text style={styles.favoriteScreen__titleSection__title}>Favorite Characters</Text>
                        <Text style={styles.favoriteScreen__titleSection__description}>Characters you liked the
                            most</Text>
                    </View>
                    <View style={styles.favoriteScreen__characterList}>
                        {charactersUrl?.map((characterUrl, key) =>
                            <CharacterCard onPress={moveToCharacterScreen} key={key} url={characterUrl}/>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}

// styles

const styles = StyleSheet.create({
    favoriteScreen: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "white",
    },

    favoriteScreen__titleSection: {
        marginTop: 100,
        marginBottom: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    favoriteScreen__titleSection__title: {
        fontFamily: "OpenSans_300Light",
        fontSize: 30,
    },
    favoriteScreen__titleSection__description: {
        fontFamily: "OpenSans_300Light",
        fontSize: 15,
        color: "gray",
    },
    favoriteScreen__characterList: {
        gap: 20,
        marginBottom: 10,
    }
});

export default FavoriteScreen;