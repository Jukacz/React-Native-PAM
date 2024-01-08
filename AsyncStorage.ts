import {getItemAsync, setItemAsync} from "expo-secure-store";
import {CharacterFromStorage} from "./types";

const getStorage = async(): Promise<CharacterFromStorage[]> => {
    const xdd = await getItemAsync("favoriteCharacters");
    if (xdd) {
        return JSON.parse(xdd);
    }
    await setItemAsync("favoriteCharacters", JSON.stringify([]));
    return [];
}

const updateStorage = async(data: CharacterFromStorage[]) => {
    await setItemAsync("favoriteCharacters", JSON.stringify(data));
}
export const getCharacterFromStorage = async(id: number | string) => {
    const data = await getStorage();
    const character = data.find((item: CharacterFromStorage) => item.id === id);
    if (character) {
        return character.url;
    }
    return null;
}

export const getAllCharactersFromStorage = async() => {
    const data = await getStorage();
    return data.map((item: CharacterFromStorage) => item.url);

}

export const addCharacterToStorage = async(id: number | string, url: string) => {
    const data = await getStorage();
    const character = data.find((item: CharacterFromStorage) => item.id === id);
    if (!character) {
        data.push({id, url});
        await updateStorage(data);
        return true;
    }
    return false;
}

export const removeCharacterFromStorage = async(id: number | string) => {
    const data = await getStorage();
    const character = data.find((item: CharacterFromStorage) => item.id === id);
    if (character) {
        const index = data.indexOf(character);
        data.splice(index, 1);
        await updateStorage(data);
        return true;
    }
    return false;
}