import React from 'react';

export function Card({ identifier, source, title }) {
    return (
        <div className={identifier}>
            <img src={source} alt={`${title}-cover`} />
            <h2>{title}</h2>
        </div>
    );
}
