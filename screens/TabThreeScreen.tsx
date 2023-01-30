import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { readLocation } from '../src/atoms/start-location';
import { writeRestaurants } from '../src/atoms/nearby-restaurants';
import { TabThreeContainer } from '../src/containers/TabThreeContainer';
import { fetchGoogleSearch } from '../src/services/google-search';
import { View } from '../src/Themed';
import styles from './stylesheets/cssTabThreeScreen';

export default function TabThreeScreen() {
    const setRestaurants: any = useSetAtom(writeRestaurants);
    const {latitude, longitude} = useAtomValue(readLocation);
  
    useEffect(() => {
      const getInitialRestaurants = async () => {
        const restaurantResponse = await fetchGoogleSearch(latitude, longitude, 'restaurants');
        console.log('restaurant response', restaurantResponse)
        setRestaurants(restaurantResponse.results)
  
      }
  
      getInitialRestaurants();
    }, [])

    return (
        <View style={styles.container}>
            <TabThreeContainer />
        </View>
    )
}