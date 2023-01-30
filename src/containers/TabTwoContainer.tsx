import React from 'react';
import { ScrollView } from 'react-native';
import { View } from '../Themed'
import { StyleSheet } from 'react-native';
import { HotelList } from '../components/hotels/hotel-list';

export const TabTwoContainer = () => {
    return (
        <View style={styles.viewContainer}>
            <ScrollView style={styles.scrollContainer}>
                <HotelList />
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#e8e8e8'

    },
    scrollContainer: {
        width: '100%',
    }
});