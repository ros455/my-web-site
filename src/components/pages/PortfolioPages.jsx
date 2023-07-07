import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioPages = () => {
    const { id } = useParams(); // Отримуємо id з URL
    return (
        <div>
            <h1>Hello</h1>
            {id}
        </div>
    );
};

export default PortfolioPages;