export interface CharacterResponse {
    info: Info;
    results: Character[];
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Male" | "Female" | "unknown";
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}


// Character detail type


export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export type CharacterFromStorage = {
    id: number | string;
    url: string;
}
