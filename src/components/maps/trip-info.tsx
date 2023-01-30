import { useAtomValue } from 'jotai';
import { Text } from 'react-native-paper'
import { readTripInfo } from '../../atoms/toggle-trip-info';
import { View } from '../../Themed'
import { styles } from './styles/css-trip-info';

export const TripInfo = (props: {toggleShow: boolean}) => {
    const getTripInfo = useAtomValue(readTripInfo);

    return (
        <View style={styles.tripContainer}>
            {
                props.toggleShow ?
                    <Text>Distance: {getTripInfo.distance} miles</Text> 
                : null
            }
        </View>

    )
}