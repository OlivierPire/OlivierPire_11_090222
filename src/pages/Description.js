import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Description/Carousel'
import '../styles/Description/index.scss'
import axios from 'axios';
import Details from '../components/Description/Details';
import Footer from '../components/Footer'
import { useParams, useNavigate } from 'react-router-dom'


const Description = () => {
    const [data, setData] = useState([]) 
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('../logements.json').then((res) => {
            if(!res.data.find(d => d.id === id)) {
                navigate("/404")
            } else {
                setData(res.data)
            }
        })
    }, [id, navigate])
    
    return (
        <div>
            <Header />
            
            {data.map((data) => (
                id === data.id ?
                <Carousel key={data.id}
                pictures={data.pictures}
                alt={data.title}
                /> : null
                ))}

            {data.map((data) => (
                id === data.id ?
                <Details key={data.id}
                id={data.id}
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