import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/Na_Nov_26.png'
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound_conatiner'>
            <div className='notfound-img'>
                <img src={img1} alt="" />
            </div>
            <div>
                <h1>The page You are Looking for</h1>
                <h1>Doesn't exist</h1>
                <Link to='/home'><button>Go Home</button></Link>
            </div>

        </div>
    );
};

export default NotFound;