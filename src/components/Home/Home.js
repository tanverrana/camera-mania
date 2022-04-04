import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className="camera">
                <div className="camera-left">
                    <h1>YOUR BEST CAMERA</h1>
                    <p>Choosing a new camera used to be so easy. With limited selection, your decision usually just revolved around price.
                        Nowadays, there are hundreds of models to choose from, and to make matters even more confusing, your smartphone already takes pretty good photos!</p>
                    <button className="live-btn">View Demo</button>
                </div>
                <div className="camera-right">
                    <img src="https://img.freepik.com/free-photo/side-view-professional-camera-with-big-camera-glass-isolated_88135-4052.jpg?w=700" alt="" />
                </div>

            </div>
            <div className="home-container">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)

                }
            </div>
        </div>
    );
};

export default Home;