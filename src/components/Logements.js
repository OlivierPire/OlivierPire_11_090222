import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Logements = () => {
    const [data, setData] = useState([]) 

    useEffect(() => {
        axios.get('./logements.json').then((res) => setData(res.data))
    }, [])
    
    return (
        <div className='logements'>
            
                {data.map((room) => (
                    <Card room = {room} key={room.id}/>
                ))}
            
        </div>
    );
};

export default Logements;