import React from 'react';
import "./Review.css"

const Review = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div>
            <div className="review-container">
                <h3>{name}</h3>
                <p>{review}</p>
                <h4>Rating: {ratings} star</h4>
            </div>
        </div>
    );
};

export default Review;