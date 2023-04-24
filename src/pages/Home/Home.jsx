import PropTypes from 'prop-types';
import { Card } from '../../components/Card';
import { HeroCard } from '../../components/HeroCard';
import HeroCardImg from '../../assets/img/home_hero-card.webp';
import './home.scss';
import { Loader } from '../../shared/Loader/Loader';

export function Home({ data, isLoading, error }) {

    if (error) {
        return <p>Erreur...</p>;
    }

    return (
        <>
            <HeroCard
                identifier='hero'
                source={HeroCardImg}
                alt='Montagne en bord de mer'
                title='Chez vous, partout et ailleurs'
            />
            <main className='housing'>
                {isLoading ? (
                    <Loader/>
                ) : (
                    <>
                        {data.map((housing) => (
                            <Card
                                key={housing.id}
                                id={housing.id}
                                cssClass='housing_card'
                                source={housing.cover}
                                title={housing.title}
                            />
                        ))}
                    </>
                )}
            </main>
        </>
    );
}

Home.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool
}