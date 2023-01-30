import { atom, useAtomValue } from 'jotai';
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { Hotel } from '../../../types/hotel';
import { styles } from './styles/css-card';
import { GOOGLE_API_KEY } from '@env';
import { View } from 'react-native';
import { StarRating } from '../starRating/star-rating';


const LeftContent = (props: any) => <Avatar.Icon {...props} icon="bed" />

const IMAGE_URL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='

export const HotelCard = ({ hotel }: { hotel: Hotel }) => {
    const photoRef = hotel.photos ?
        { uri: IMAGE_URL + hotel.photos[0].photo_reference + '&key=' + GOOGLE_API_KEY } :
        require('../../images/hotel-default.png');

    return (
        <View style={styles.viewContainer}>
            <Card style={styles.card}>

                <Card.Title
                    title={hotel.name}
                    subtitle={<StarRating stars={hotel.rating} maxStars={5} />}
                    left={LeftContent}
                />

                <Card.Content style={styles.address}>
                    <Text>{hotel.vicinity}{hotel.plus_code.compound_code.split(',')[1]}</Text>
                </Card.Content>

                <Card.Cover
                    style={styles.border}
                    resizeMode={hotel.photos ? 'cover': 'contain'}
                    source={photoRef} />

                <Card.Actions style={styles.flexRow}>
                    <Button mode="text" color='blue'>More Details</Button>
                    <Button mode="contained" color='rgb(255, 56, 92)'>Book</Button>
                </Card.Actions>

            </Card>
        </View>
    )
}
