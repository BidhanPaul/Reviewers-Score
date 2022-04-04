import React from 'react';
import './Review.css';

const Review = (props) => {
    const { img, name, product, brand, review, comment } = props.review;
    return (
        <div className='review-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p><strong>Product:</strong> {product}</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Review:</strong> {review}</p>
            <p><strong>Comment:</strong> {comment}</p>

        </div>
    );
};

export default Review;