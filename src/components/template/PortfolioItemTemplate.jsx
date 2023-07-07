import React from 'react';
import { Link } from 'react-router-dom';
const PortfolioItemTemplate = ({item}) => {
    return (
        <div className='portfolio_template_block'>
            <Link to={`portfolio/${item.id}`}>
            <img className='portfolio_template_img' src={`./img/${item.image}`}/>
            </Link>
        </div>
    );
};

export default PortfolioItemTemplate;