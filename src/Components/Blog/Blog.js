import React from 'react';
import img3 from './img/React-Context.png';
import img4 from './img/semantic_Tag.png';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog'>
                <div>
                    <h1>What is Context API?</h1>
                    <p>In React, the context API is a method for React application functionally generate Global variables that can be passed around. This is an alternative to “Prop drilling” or shifting props to grandparent to child parent etc. This is an easier and lighter approach to state management.</p>
                </div>
                <div className='img-1'>
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='blog'>
                <div>
                    <h1>What is Semantic Tag?</h1>
                    <p>Semantic tag are some special HTML tags that makes a HTML page meaningful. Each tags describes its meaning to the browser and also to the developer. These tags are so important because that makes the HTML more comprehensible by better describing the different section and layout of web pages.</p>
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className='blog'>
                <h1>Inline, Inline-Block, Block Elements</h1>
                <p><strong>Inline:</strong> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.
                    <br />
                    <strong>Inline-block:</strong> it is formatted just like the inline element, where it doesn’t start on a new line. But you can apply width and height values.
                    <br />
                    <strong>Block:</strong> The element will start on a new line and occupy the full width available. And you can set width and height values.
                </p>
            </div>
        </div>
    );
};

export default Blog;