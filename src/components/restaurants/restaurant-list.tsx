import { View } from 'react-native'
import { HotelCard } from '../hotels/hotel-card'
import { styles } from '../hotels/styles/css-hotel-list'
import { readRestaurants } from '../../atoms/nearby-restaurants';
import { useAtomValue } from 'jotai';
import { RestaurantCard } from './restaurant-card';
import { Restaurant } from '../../../types/restaurant';
import { Text } from 'react-native-paper';

export const RestaurantList = () => {
    const getRestaurants = useAtomValue(readRestaurants);

    return (
        <View style={styles.viewContainer}>
            {
                getRestaurants.length ?
                getRestaurants.map((restaurant: Restaurant) => 
                    <RestaurantCard key={restaurant.place_id} restaurant={restaurant}/>
                ):
                <Text>Loading Restaurants...</Text>
            }
        </View>
    )

}