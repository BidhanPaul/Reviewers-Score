import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Reviews/Review/Review';
import './Home.css';
import img2 from './img/man-with-laptop-presenting-something.jpg';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='discount-section-conatiner'>
                <div className='half-width-home'>
                    <img src={img2} alt="" />
                </div>
                <div className='half-width-home'>
                    <h1>Buy Your Laptop Now </h1>
                    <h1>With <span className='heading-color'>35% Discount!</span> </h1>
                    <p>This offer is available right now! You will get 35% discount form the total price on any Products. This offer will be valid till 15th April 2022. </p>
                    <button className='btn-home'>BUY NOW</button>
                </div>
            </div>
            <div className='review-conatainer'>
                <div>
                    <h1>Customer's Review</h1>
                </div>
                <div className='review'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div><Link to='/reviews'><button>View All Reviews</button></Link></div>
            </div>
        </div>
    );
};

export default Home;