const BASE_URL = "https://rickandmortyapi.com/api/character";

export class CharactersAPI {
    static async getAllCharacters(page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?page=${page}`);
            if (!response.ok) throw new Error('Error fetching characters');
            return await response.json();
        } catch (error) {
            console.error('Error fetching characters:', error);
            throw error;
        }
    }

    static async getCharactersByName(name, page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?name=${name}&page=${page}`);
            if (!response.ok) throw new Error('Character not found');
            return await response.json();
        } catch (error) {
            console.error('Error searching characters:', error);
            throw error;
        }
    }

    static async getCharacterById(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) throw new Error('Character not found');
            return await response.json();
        } catch (error) {
            console.error('Error fetching character:', error);
            throw error;
        }
    }

    static async getMultipleCharacters(ids) {
        try {
            const response = await fetch(`${BASE_URL}/${ids.join(',')}`);
            if (!response.ok) throw new Error('Error fetching characters');
            return await response.json();
        } catch (error) {
            console.error('Error fetching multiple characters:', error);
            throw error;
        }
    }
}