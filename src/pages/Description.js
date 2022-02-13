import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Description/Carousel'
import '../styles/Description/index.scss'
import axios from 'axios';
import Details from '../components/Description/Details';
import Footer from '../components/Footer'


const Description = ({}) => {
    const [data, setData] = useState([]) 
    
        useEffect(() => {
            axios.get('./logements.json').then((res) => setData(res.data))
        }, [])        
        const url = window.location.href

        console.log(window.location);
    
    return (
        <div>
            <Header />
            
            {data.map((data) => (
                url.includes(data.id) ?
                <Carousel key={data.id}
                pictures={data.pictures}
                alt={data.title}
                /> : null
            ))}

            {data.map((data) => (
                url.includes(data.id) ?
                <Details key={data.id}
                title={data.title}
                description={data.description}
                host={data.host}
                rating={data.rating}
                location={data.location}
                equipments={data.equipments}
                tags={data.tags}
                /> : null
            ))}

            <Footer />
        </div>
    );
};

export default Description;