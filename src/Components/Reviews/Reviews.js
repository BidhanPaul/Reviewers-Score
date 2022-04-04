import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from './Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='review-conatainer'>
            <div>
                <h1>What Our Customers Say About Our Products </h1>
            </div>
            <div className='review'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;