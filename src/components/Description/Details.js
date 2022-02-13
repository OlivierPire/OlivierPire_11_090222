import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'

const Details = ({ title, description, host, rating, location, equipments, tags }) => {
    const [ fullStars, setStars ] = useState(0)
    const [ emptyStars, setEmptyStars ] = useState(5)
    const totalStars = 5;

    rating > 1 ? console.log("oui") : console.log("non");
    // rate > 1 ? console.log("oui") : console.log("non");
    return (
        <div className='details'>
            <div className='left-infos'>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <ul className='tagsList'>
                    {tags.map((tag) => (
                        <li key={tag} className='tag'>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="right-infos">
                <div className="profile">
                    <span>{host.name}</span>
                    <img src={host.picture} alt={host.name} />
                </div>
                <ul>
                    <li><AiFillStar className='emptyStars'/></li>
                    <li><AiFillStar className='emptyStars'/></li>
                    <li><AiFillStar className='emptyStars'/></li>
                    <li><AiFillStar className='emptyStars'/></li>
                    <li><AiFillStar className='emptyStars'/></li>
                </ul>
            </div>
        </div>
    );
};

export default Details;