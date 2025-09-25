const BASE_URL = "https://rickandmortyapi.com/api/episode";

export class EpisodesAPI {
    static async getAllEpisodes(page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?page=${page}`);
            if (!response.ok) throw new Error('Error fetching episodes');
            return await response.json();
        } catch (error) {
            console.error('Error fetching episodes:', error);
            throw error;
        }
    }

    static async getEpisodeById(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) throw new Error('Episode not found');
            return await response.json();
        } catch (error) {
            console.error('Error fetching episode:', error);
            throw error;
        }
    }

    static async getEpisodesByName(name, page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?name=${name}&page=${page}`);
            if (!response.ok) throw new Error('Episode not found');
            return await response.json();
        } catch (error) {
            console.error('Error searching episodes:', error);
            throw error;
        }
    }
}