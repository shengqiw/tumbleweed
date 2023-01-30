import styles from './stylesheets/cssTabTwoScreen';
import { View } from '../src/Themed';
import { useEffect } from 'react';
import { fetchGoogleSearch } from '../src/services/google-search';
import { writeHotels } from '../src/atoms/nearby-hotels';
import { useAtomValue, useSetAtom } from 'jotai';
import { readLocation } from '../src/atoms/start-location';
import { TabTwoContainer } from '../src/containers/TabTwoContainer';

export default function TabTwoScreen() {
  const setHotels: any = useSetAtom(writeHotels);
  const {latitude, longitude} = useAtomValue(readLocation);

  useEffect(() => {
    const getInitialHotels = async () => {
      const hotelResponse = await fetchGoogleSearch(latitude, longitude, 'hotels');
      setHotels(hotelResponse.results)
    }

    getInitialHotels();
  }, [])

  return (
    <View style={styles.container}>
      <TabTwoContainer />
    </View>
  );
}


