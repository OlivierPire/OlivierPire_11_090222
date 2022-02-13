import React from 'react';
import { Link } from 'react-router-dom';
import Description from '../../pages/Description';

const Card = (props) => {
    return (
        <div className='card'>
            <Link to={`/${props.id}`}>
                <h2>{props.title}</h2>
                <div className="linear-gradient"></div>
                <img src={props.cover} alt="" />
            </Link>
            
        </div>


    );
};
            
export default Card;