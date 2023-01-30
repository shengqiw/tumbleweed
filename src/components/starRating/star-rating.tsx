import Stars from 'react-native-star-rating';

export const StarRating = ({stars, maxStars = 5} : {stars: number, maxStars: any}) => {

    return (
        <Stars 
            disabled={false}
            maxStars={maxStars}
            rating={stars}
            fullStarColor={'#FDCC0D'}
            emptyStarColor={'#FDCC0D'}
            starSize={20}
        />
    )
}