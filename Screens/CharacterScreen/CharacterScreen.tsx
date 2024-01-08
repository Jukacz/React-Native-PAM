import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, ToastAndroid, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";
import EpisodeCard from "../../Components/Cards/EpisodeCard/EpisodeCard";
import Header from "../../Components/Header/Header";
import {Button} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {addCharacterToStorage, getCharacterFromStorage, removeCharacterFromStorage} from "../../AsyncStorage";
import {SafeAreaView} from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

type Props = NativeStackScreenProps<RoutesType, "CharacterScreen">

const CharacterScreen: React.FC<Props> = ({navigation, route}) => {
    const {character} = route.params;
    const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);

    const checkIfAlreadyLiked = async () => {
        const characterFromStorage = await getCharacterFromStorage(character.id.toString());
        setAlreadyLiked(!!characterFromStorage);
    }

    const likeCharacter = async () => {
        if (alreadyLiked) {
            await removeCharacterFromStorage(character.id.toString());
            setAlreadyLiked(false)
            ToastAndroid.show("Character removed from favorites", ToastAndroid.SHORT);
        } else {
            await addCharacterToStorage(character.id.toString(), character.url);
            setAlreadyLiked(true)
            ToastAndroid.show("Character added to favorites", ToastAndroid.SHORT);
        }
    }

    useEffect(() => {
        checkIfAlreadyLiked()
    }, [route.params.character])

    return (
        <>
            <View style={{paddingBottom: 100}}>
                <SafeAreaView>
                    <Header canGoBack={true}/>
                    <ScrollView nestedScrollEnabled={true} style={styles.screen}>
                        <View style={styles.header}>
                            <Animated.Image sharedTransitionTag={"image"} style={styles.header__image} source={{uri: character?.image}}/>
                            <Text style={styles.header__text}>{character?.name}</Text>
                        </View>
                        {/* Basic info */}
                        <View style={styles.basicInfoContainer}>
                            <BasicInfo title={"Status"} value={character?.status}/>
                            <BasicInfo title={"Species"} value={character?.species}/>
                            <BasicInfo title={"Last seen"} value={character?.location.name}/>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.episodes__title}>Episodes ({character.episode.length})</Text>
                            <Text style={styles.episodes__description}>Episodes where character has been</Text>
                            <ScrollView nestedScrollEnabled={true} style={styles.episodes}>
                                <View style={styles.episodes__list}>
                                    {character?.episode.reverse().map((episode, key) => <EpisodeCard key={key}
                                                                                           urlToEpisode={episode}/>)}
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <Button style={styles.likeButton} onPress={() => likeCharacter()}>
                <FontAwesomeIcon color={alreadyLiked ? "red" : "black"} size={20} icon={faHeart}/>
            </Button>
        </>
    )
}

type BasicInfoProps = {
    title: string;
    value: string | number;
}

const BasicInfo: React.FC<BasicInfoProps> = ({title, value}) => {
    return (
        <View style={styles.basicInfo}>
            <Text style={styles.basicInfo__value}>{value}</Text>
            <Text style={styles.basicInfo__title}>{title}</Text>
        </View>
    )

}

// styles

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
    },

    header: {
        flexDirection: "row",
        gap: 30,
        justifyContent: "center",
        marginTop: 20,
        alignItems: "center",
    },
    header__image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    header__text: {
        fontSize: 30,
        flex: 1,
        fontWeight: "bold",
        textTransform: "capitalize",
        flexWrap: "wrap",
    },
    basicInfoContainer: {
        marginTop: 20,
        flexDirection: "row",
        columnGap: 30,
        rowGap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
    },
    basicInfo: {
        padding: 15,
        gap: 10,
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 0.2,
        borderColor: "gray",
        borderRadius: 5,
        // shadow
        elevation: 5,
    },
    basicInfo__value: {
        fontSize: 22,
        fontWeight: "bold",
    },
    basicInfo__title: {
        fontSize: 12,
        color: "gray",
        fontWeight: "normal",
    },
    // episodes
    episodes: {
        height: "100%",
        marginBottom: 50,
    },
    episodes__title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    episodes__description: {
        fontSize: 13,
        fontWeight: "normal",
        color: "gray",
        marginBottom: 10,
    },
    episodes__list: {
        gap: 10,
    },
    likeButton: {
        position: "absolute",
        bottom: 15,
        right: 15,
        height: 50,
        width: 50,
        backgroundColor: "#ededed",
    }
})

export default CharacterScreen;