import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Logements from '../components/Logements';
import '../styles/Home/index.scss'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Logements />
        </div>
    );
};

export default Home;