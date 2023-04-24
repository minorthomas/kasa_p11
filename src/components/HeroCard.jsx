import PropTypes from 'prop-types';

export function HeroCard({ identifier, source, alt, title }) {
    return (
        <section className={identifier}>
            <img src={source} alt={alt} />
            {title && <h1>{title}</h1>}
        </section>
    );
}

HeroCard.propTypes = {
    identifier: PropTypes.string,
    source: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
}