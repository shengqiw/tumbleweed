import React from 'react';
import { ScrollView } from 'react-native';
import { View } from '../Themed'
import { StyleSheet } from 'react-native';
import { RestaurantList } from '../components/restaurants/restaurant-list';

export const TabThreeContainer = () => {
    return (
        <View style={styles.viewContainer}>
            <ScrollView style={styles.scrollContainer}>
                <RestaurantList />
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