import React from 'react';
import { GooglePlacesAutocomplete } from '../components/maps/google-places-autocomplete';
import { GoogleMaps } from '../components/maps/google-maps';
import { View } from '../Themed'
import { StyleSheet } from 'react-native';
import { TripInfo } from '../components/maps/trip-info';
import { useAtomValue } from 'jotai';
import { readToggleTripInfo } from '../atoms/toggle-trip-info';

export const TabOneContainer = () => {

    const getToggleTripInfo:boolean = useAtomValue(readToggleTripInfo);


    return (
        <View style={styles.viewContainer}>
            <GooglePlacesAutocomplete />
            <GoogleMaps />
            <TripInfo toggleShow={getToggleTripInfo}/>
        </View>
    )

}

const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    }
});