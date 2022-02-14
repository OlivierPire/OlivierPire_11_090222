import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const Details = ({ title, description, host, rating, location, equipments, tags }) => {
    const totalStars = [1, 2, 3, 4, 5];

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
                    {totalStars.map((star) => (
                        rating >= star ? <li><AiFillStar className='fullStars'/></li> : <li><AiFillStar className='emptyStars'/></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Details;