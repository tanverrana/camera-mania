import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <div>
            <h1>What our customer say!</h1>
            <div className="reviews-container">

                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;