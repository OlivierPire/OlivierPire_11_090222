import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import Dropdown from '../Dropdown';

const Details = ({ title, description, host, rating, location, equipments, tags }) => {
    const totalStars = [1, 2, 3, 4, 5];

    return (
        <div className='details'>
            <div className='informations'>
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
                        {totalStars.map((star, index) => (
                            rating >= star ? <li key={index + "full"}><AiFillStar className='fullStars'/></li> : <li key={index + "empty"}><AiFillStar className='emptyStars'/></li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className='dropdown-container'>
                <Dropdown title={"Description"} text={description} className="dropdown-details dropdown"/>
                <Dropdown title={"Équipements"} text={equipments} className="dropdown-details dropdown"/>
            </div>
        </div>
    );
};

export default Details;