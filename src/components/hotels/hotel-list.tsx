import { View } from 'react-native'
import { HotelCard } from './hotel-card'
import { styles } from './styles/css-hotel-list'
import { readHotels } from '../../atoms/nearby-hotels';
import { useAtomValue } from 'jotai';
import { Hotel } from '../../../types/hotel';
import { Text } from '../../Themed';

export const HotelList = () => {

    const getHotels = useAtomValue(readHotels);
    console.log('reading hotels first time', getHotels)

    return (
        <View style={styles.viewContainer}>
            {
                getHotels.length ?
                getHotels.map((hotel: Hotel) => <HotelCard key={hotel.place_id} hotel={hotel} />) :
                <Text>Loading Hotels...</Text>
            }
        </View>
    )

}
