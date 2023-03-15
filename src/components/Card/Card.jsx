import React from 'react';

export function Card({ source, title }) {
    return (
        <div className='card'>
            <img src={source} alt={`${title}-cover`} />
            <h2>{title}</h2>
        </div>
    );
}
