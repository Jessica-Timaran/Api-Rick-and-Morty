const BASE_URL = "https://rickandmortyapi.com/api/location";

export class LocationsAPI {
    static async getAllLocations(page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?page=${page}`);
            if (!response.ok) throw new Error('Error fetching locations');
            return await response.json();
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    }

    static async getLocationById(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) throw new Error('Location not found');
            return await response.json();
        } catch (error) {
            console.error('Error fetching location:', error);
            throw error;
        }
    }

    static async getLocationsByName(name, page = 1) {
        try {
            const response = await fetch(`${BASE_URL}?name=${name}&page=${page}`);
            if (!response.ok) throw new Error('Location not found');
            return await response.json();
        } catch (error) {
            console.error('Error searching locations:', error);
            throw error;
        }
    }
}