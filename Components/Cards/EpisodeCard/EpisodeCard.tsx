import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Episode} from "../../../types";
import {requestToAPI} from "../../../requestToAPI";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendar, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

type Props = {
    urlToEpisode: string
}
const EpisodeCard: React.FC<Props> = ({urlToEpisode}) => {
    const [episode, setEpisode] = useState<Episode>();

    const getEpisode = async () => {
        const response = await requestToAPI(urlToEpisode, {withoutBaseUrl: true}).get().catch(err => err.response);

        if (response.status === 200) {
            setEpisode(response.data);
        } else if (response.status === 404) {
            alert("Episode not found")
        }
    }

    useEffect(() => {
        getEpisode();
    }, [])


    return (
        <View style={styles.card}>
            <Text style={styles.card__episode}>{episode?.episode}</Text>
            <Text style={styles.card__title}>{episode?.name}</Text>
            <View style={styles.card__detailsList}>
                <FontAwesomeIcon color={"grey"} icon={faCalendar} />
                <Text style={styles.card__detailsList__text}>{episode?.air_date}</Text>
                <Text> | </Text>
                <FontAwesomeIcon color={"grey"} icon={faPeopleGroup} />
                <Text style={styles.card__detailsList__text}> {episode?.characters.length} characters played</Text>
            </View>
        </View>
    )
}

// styles

const styles = StyleSheet.create({
    card: {
        padding: 5,
        width: "100%",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
    },
    card__episode: {
        fontSize: 13,
        color: "grey",
    },
    card__title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    card__detailsList: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    card__detailsList__text: {
        fontSize: 12,
        color: "grey",
    }
})


export default EpisodeCard;