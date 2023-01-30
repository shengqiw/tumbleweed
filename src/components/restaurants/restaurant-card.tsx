import { atom, useAtomValue } from 'jotai';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { styles } from '../hotels/styles/css-card';
import { GOOGLE_API_KEY } from '@env';
import { View } from 'react-native';
import { StarRating } from '../starRating/star-rating';
import { Restaurant } from '../../../types/restaurant';


const LeftContent = (props: any) => <Avatar.Icon {...props} icon="food" />

const IMAGE_URL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=';

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
    const photoRef = restaurant.photos ?
        { uri: IMAGE_URL + restaurant.photos[0].photo_reference + '&key=' + GOOGLE_API_KEY } :
        require('../../images/restaurant-default.png');

    return (
        <View style={styles.viewContainer}>
            <Card style={styles.card}>

                <Card.Title
                    title={restaurant.name}
                    subtitle={<StarRating stars={restaurant.rating} maxStars={5} />}
                    left={LeftContent}
                />
                <Card.Content style={styles.address}>
                    <Text>{restaurant.vicinity}{restaurant.plus_code.compound_code.split(',')[1]}</Text>
                </Card.Content>

                <Card.Cover
                    style={styles.border}
                    resizeMode={restaurant.photos ? 'cover': 'contain'}
                    source={photoRef} />

                <Card.Actions style={styles.flexRow}>
                    <Button mode="text" color='blue'>More Details</Button>
                    <Button mode="contained" color='rgb(255, 56, 92)'>Call</Button>
                </Card.Actions>

            </Card>
        </View>
    )
}
