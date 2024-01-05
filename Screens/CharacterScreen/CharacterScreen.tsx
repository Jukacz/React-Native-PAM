import React from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RoutesType} from "../../Routes";
import EpisodeCard from "../../Components/Cards/EpisodeCard/EpisodeCard";

type Props = NativeStackScreenProps<RoutesType, "CharacterScreen">

const CharacterScreen: React.FC<Props> = ({navigation, route}) => {
    const {character} = route.params;

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image style={styles.header__image} source={{uri: character?.image}}/>
                <Text style={styles.header__text}>{character?.name}</Text>
            </View>
            {/* Basic info */}
            <View style={styles.basicInfoContainer}>
                <BasicInfo title={"Status"} value={character?.status}/>
                <BasicInfo title={"Species"} value={character?.species}/>
                <BasicInfo title={"Last seen"} value={character?.location.name}/>
            </View>
            {/*Episodes characater played in*/}
            <View style={styles.episodes}>
                <Text style={styles.episodes__title}>Episodes</Text>
                <Text style={styles.episodes__description}>Episodes where character has been</Text>
                <ScrollView>
                    {character?.episode.map(episode => <EpisodeCard urlToEpisode={episode}/>)}
                </ScrollView>
            </View>
        </View>
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
        height: "100%",
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
        marginTop: 20,
        height: 400,
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
    }
})

export default CharacterScreen;