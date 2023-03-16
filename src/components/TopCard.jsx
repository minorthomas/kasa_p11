import React from 'react';

export function TopCard({ identifier, source, title, insideText }) {
    return (
        <section className={identifier}>
            <img src={source} alt={title}/>
            <h1>{insideText}</h1>
        </section>
    );
}