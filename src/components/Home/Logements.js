import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Description from '../../pages/Description';

const Logements = () => {
    const [data, setData] = useState([]) 

    useEffect(() => {
        axios.get('./logements.json').then((res) => setData(res.data))
    }, [])
    
    return (
        <div className='logements'>
            {data.map((props) => (
                <Card 
                key={props.id}
                cover={props.cover}
                title={props.title}
                id={props.id}
                />
                ))}
            

        </div>
    );
};


export default Logements;