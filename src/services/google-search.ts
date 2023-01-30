import { GOOGLE_API_KEY } from '@env';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';


export const fetchGoogleSearch = async(lat: number, lon: number, keyword: string) => {
    const response = await fetch(BASE_URL + `?location=${lat},${lon}&radius=17000&keyword=${keyword}&key=${GOOGLE_API_KEY}`)

    return response.json();
}