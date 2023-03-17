import React from 'react';

export function TopCard({ identifier, source, alt, title }) {
    return (
        <section className={identifier}>
            <img src={source} alt={alt} />
            {title && <h1>{title}</h1>}
        </section>
    );
}
