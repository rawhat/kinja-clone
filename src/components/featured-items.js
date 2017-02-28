import React, { Component } from 'react';
import _ from 'lodash';

export default class FeaturedItems extends Component {
    static state = {
        windowWidth: -1,
        featuredItemWidth: -1
    };

    componentWillMount = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount = () => {
        this.windowSizeListener = window.addEventListener('resize', _.debounce(() => {
            this.setState({
                windowWidth: window.innerWidth,
            });
        }, 50));
    }

    componentWillUnmount = () => {
        window.removeEventListener(this.windowSizeListener);
    }

    render = () => {
        // let windowWidth = window.innerWidth;
        // let windowHeight = window.innerHeight;

        let imgStyle = {
            width: (this.state.windowWidth - 175) / 4,
            height: 'auto'//(windowHeight - 250) / 4
        };

        return (
            <div className="featured-items">
                <div className="featured-item">
                    <div className='featured-item-image'>
                        <img src='http://i.imgur.com/VSnfDuz.jpg' style={imgStyle}/>
                        <div className="featured-item-header" style={{ left: 3 }}>This is test image 1.</div>
                    </div>                
                </div>
                <div className="featured-item">
                    <div className='featured-item-image'>
                        <img src='http://i.imgur.com/VSnfDuz.jpg' style={imgStyle}/>
                        <div className="featured-item-header" style={{ left: 10 }}>This is test image 2.</div>
                    </div>
                </div>
                <div className="featured-item">
                    <div className='featured-item-image'>
                        <img src='http://i.imgur.com/VSnfDuz.jpg' style={imgStyle}/>
                        <div className="featured-item-header" style={{ left: 10 }}>This is test image 3.</div>
                    </div>
                </div>
                <div className="featured-item">
                    <div className='featured-item-image'>
                        <img src='http://i.imgur.com/VSnfDuz.jpg' style={imgStyle}/>
                        <div className="featured-item-header" style={{ left: 3 }}>This is test image 4.</div>
                    </div>
                </div>
            </div>
        );
    }
}