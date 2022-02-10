import React from 'react';

const Card = (props) => {
    const { room } = props
    console.log(room);
    return (
        <div className='card'>
            <h2>{room.title}</h2>
            <img src={room.cover} alt="" />
        </div>
    );
};

export default Card;