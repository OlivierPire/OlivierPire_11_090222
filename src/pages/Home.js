import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logements from '../components/Home/Logements';
import '../styles/Home/index.scss'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner src={"../../img/banner.png"} title={"Chez vous, partout et ailleurs"} classname={"banner"}/>
            <Logements />
            <Footer />
        </div>
    );
};

export default Home;