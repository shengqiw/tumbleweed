import { LatLon } from '../../types/location';

export const getDelta = (startLatLon: LatLon, destinationLatLon: LatLon) => {

    const distance =  Math.sqrt(
        Math.pow(destinationLatLon.latitude - startLatLon.latitude, 2) + 
        Math.pow(destinationLatLon.longitude - startLatLon.longitude, 2));

    return Math.max(0.5, distance * 1.5);
}