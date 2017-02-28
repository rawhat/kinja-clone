import React from 'react';

export default () => {
    return (
        <div className="featured-items">
            <div className="featured-item">
                <div className='featured-item-image'>
                    <img src='http://i.imgur.com/VSnfDuz.jpg' />
                    <div className="featured-item-header">This is test image 1.</div>
                </div>                
            </div>
            <div className="featured-item">
                <div className='featured-item-image'>
                    <img src='http://i.imgur.com/VSnfDuz.jpg' />
                    <div className="featured-item-header">This is test image 2.</div>
                </div>
            </div>
            <div className="featured-item">
                <div className='featured-item-image'>
                    <img src='http://i.imgur.com/VSnfDuz.jpg' />
                    <div className="featured-item-header">This is test image 3.</div>
                </div>
            </div>
            <div className="featured-item">
                <div className='featured-item-image'>
                    <img src='http://i.imgur.com/VSnfDuz.jpg' />
                    <div className="featured-item-header">This is test image 4.</div>
                </div>
            </div>
        </div>
    );
}