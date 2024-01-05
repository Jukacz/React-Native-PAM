import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Episode} from "../../../types";
import {requestToAPI} from "../../../requestToAPI";

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
        <View>
            <Text>{episode?.name}</Text>
        </View>
    )
}

// styles

const episodeCardStyles = StyleSheet.create({

})


export default EpisodeCard;