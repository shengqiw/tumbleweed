import { LatLon } from '../../types/location';

export const getMidpoint = (startLatLon: LatLon, destinationLatLon: LatLon | { latitude: null, longitude: null }) => {

    return destinationLatLon.latitude ? {
        latitude: (destinationLatLon.latitude + startLatLon.latitude) / 2,
        longitude: (destinationLatLon.longitude + startLatLon.longitude) / 2
    } :
    {
        latitude: (startLatLon.latitude + startLatLon.latitude) / 2,
        longitude: (startLatLon.longitude + startLatLon.longitude) / 2
    }
}