import { styles } from './styles/css-google-maps';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { readLocation, writeLocation, readLatLon } from '../../atoms/start-location';
import { readDestination, writeDestination, readDestinationLatLon } from '../../atoms/destination-location';
import { Location } from '../../../types/location';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '@env';
import { getDelta } from '../../helpers/get-delta';
import { getMidpoint } from '../../helpers/get-midpoint';
import { writeToggleTripInfo, writeTripInfo } from '../../atoms/toggle-trip-info';
import { readToggleRoute } from '../../atoms/toggle-route';

export const GoogleMaps = () => {
    const getLocation = useAtomValue(readLocation);
    const setLocation = useSetAtom(writeLocation);
    const getLatLon = useAtomValue(readLatLon);

    const getDestination = useAtomValue(readDestination);
    const setDestination = useSetAtom(writeDestination);
    const getDestinationLatLon = useAtomValue(readDestinationLatLon);

    const setTripInfo = useSetAtom(writeTripInfo);
    const setToggleTripInfo = useSetAtom(writeToggleTripInfo);

    const midPoint = getMidpoint(getLatLon, getDestinationLatLon);
    const delta = getDelta(getLatLon, getDestinationLatLon);

    const getToggleRoute = useAtomValue(readToggleRoute);

    console.log('DELTA', delta);

    return (
        <MapView
            style={styles.mapContainer}
            initialRegion={initialRegionOptions(getLocation)}
            region={{
                ...midPoint,
                latitudeDelta: delta,
                longitudeDelta: delta
            }}
        >
            {
                getToggleRoute ?
                    <MapViewDirections
                        origin={getLatLon}
                        destination={getDestinationLatLon}
                        apikey={GOOGLE_API_KEY}
                        strokeColor='red'
                        strokeWidth={3}
                        onReady={(result) => {
                            console.log('Distance result', result);
                            setTripInfo(result);
                            setToggleTripInfo(true);
                        }}
                    /> : null
            }

            <Marker
                key={'start'}
                coordinate={coordinateOptions(getLocation)}
                draggable={true}
                onDragEnd={(event) => onDragEndFunc(event, setLocation)}
                pinColor={'turquoise'}
            />
            {
                getToggleRoute ?
                    <Marker
                        key={'end'}
                        coordinate={coordinateOptions(getDestination)}
                        draggable={true}
                        onDragEnd={(event) => onDragEndFunc(event, setDestination)}
                    /> : null
            }

        </MapView>
    );
}

const initialRegionOptions = (getLocation: Location) => ({
    latitude: getLocation.latitude,
    longitude: getLocation.longitude,
    latitudeDelta: 2,
    longitudeDelta: 2
});

const coordinateOptions = (getLocation: Location) => ({
    latitude: getLocation.latitude,
    longitude: getLocation.longitude
})

const onDragEndFunc = (event: any, setLocation: any) => {
    setLocation({
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
        latitudeDelta: 2,
        longitudeDelta: 2
    })
    console.log('Pin end location', event.nativeEvent.coordinate)
} 