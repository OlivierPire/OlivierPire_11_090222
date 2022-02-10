import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to='/'>
                Accueil
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to='/a-propos'>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;