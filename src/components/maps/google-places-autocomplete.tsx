import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete as AutoComplete } from 'react-native-google-places-autocomplete';
import { styles } from './styles/css-google-places-autocomplete';
import { fetchGoogleSearch } from '../../services/google-search';
import { GOOGLE_API_KEY } from '@env';
import { LatLon, Location } from '../../../types/location';

import { useAtomValue, useSetAtom } from 'jotai';
import { readLocation, writeLocation } from '../../atoms/start-location';
import { readDestination, writeDestination } from '../../atoms/destination-location';
import { writeHotels } from '../../atoms/nearby-hotels';
import { writeRestaurants } from '../../atoms/nearby-restaurants';
import { View } from 'react-native';
import { writeToggleRoute } from '../../atoms/toggle-route';

export const GooglePlacesAutocomplete = () => {
    const getLocation = useAtomValue(readLocation);
    const setLocation = useSetAtom(writeLocation);

    const getDestination = useAtomValue(readDestination);
    const setDestination = useSetAtom(writeDestination);

    const setHotels = useSetAtom(writeHotels);
    const setRestaurants = useSetAtom(writeRestaurants);

    const setToggleRoute = useSetAtom(writeToggleRoute);

    return (
        <View style={styles.viewContainer}>
            <AutoComplete
                placeholder='Starting Location...'
                // 'details' is provided when fetchDetails = true
                fetchDetails={true}
                onPress={(data, details) => onPressFuncStart(data, details, setLocation, setHotels, setRestaurants)}
                GooglePlacesSearchQuery={searchQueryOptions}
                query={queryOptions(getLocation)}
                styles={stylesOptions}
            />
            <AutoComplete
                placeholder='Destination...'
                // 'details' is provided when fetchDetails = true
                fetchDetails={true}
                onPress={(data, details) => onPressFuncDestination(data, details, setDestination, setToggleRoute)}
                GooglePlacesSearchQuery={searchQueryOptions}
                query={queryOptions(getDestination)}
                styles={stylesOptions}
            />
        </View>
    )
}

const onPressFuncStart = async (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null,
    setLocation: any,
    setHotels: any,
    setRestaurants: any
) => {
    console.log('Search Results Start', data, details);
    const currLat = details?.geometry.location.lat || 0;
    const currLon = details?.geometry.location.lng || 0;

    setLocation({
        latitude: currLat,
        longitude: currLon,
        latitudeDelta: 1,
        longitudeDelta: 1
    });

    const hotelResponse = await fetchGoogleSearch(currLat, currLon, 'hotels');
    const restaurantResponse = await fetchGoogleSearch(currLat, currLon, 'restaurant');

    setHotels(hotelResponse.results)
    setRestaurants(restaurantResponse.results)
}

const onPressFuncDestination = async (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null,
    setDestination: any,
    setToggleRoute: any
) => {
    console.log('Search Results Destination', data, details);
    const currLat = details?.geometry.location.lat || 0;
    const currLon = details?.geometry.location.lng || 0;

    setDestination({
        latitude: currLat,
        longitude: currLon,
        latitudeDelta: 1,
        longitudeDelta: 1
    });

    setToggleRoute(true);
}

const searchQueryOptions = {
    rankby: 'distance'
}

const queryOptions = (getLocation: Location) => ({
    key: GOOGLE_API_KEY,
    language: 'en',
    components: 'country:us',
    radius: '30000',
    location: `${getLocation.latitude}, ${getLocation.longitude}`
})

const stylesOptions = {
    container: styles.searchContainer,
    listView: styles.listView,
    textInput: styles.textInput,
    textInputContainer: styles.textInputContainer,
    row: styles.row,
    poweredContainer: {
        display: 'none'
    }

}