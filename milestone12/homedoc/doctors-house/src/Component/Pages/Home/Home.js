import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Serivices from './services/Serivices';
import Banner from './Banner/Banner';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Serivices></Serivices>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;