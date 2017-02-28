import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router';

import SearchBar from'./search-bar';
import LinksBar from './links-bar';
import FeaturedItems from './featured-items';
import MainBodySidebar from './main-body-sidebar';
import MainBodyContent from './main-body-content';

export default class App extends Component {
    render = () => {
        return <div>
            <SearchBar />
            <div className='logo-header'>
                <h3>KinjaClone</h3>
            </div>
            <LinksBar />
            <FeaturedItems />
            <div className='main-body'>
                <MainBodySidebar />
                <MainBodyContent />
            </div>
        </div>;
    }
}