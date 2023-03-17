import React from 'react';
import { Link } from 'react-router-dom';

export function Card({ id, cssClass, source, title }) {
    return (
        <Link to={`/housing/${id}`} className={cssClass}>
            <img src={source} alt={`${title}-cover`} />
            <h2>{title}</h2>
        </Link>
    );
}
