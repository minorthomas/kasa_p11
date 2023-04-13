import React from 'react';
import { Card } from '../../components/Card';
import { TopCard } from '../../components/TopCard';
import TopCardImg from '../../assets/img/home_top-card.webp';
import './home.scss';

export function Home({ data, isLoading, error }) {

    if (error) {
        return <p>Erreur...</p>;
    }

    return (
        <>
            <TopCard
                identifier='home_topcard'
                source={TopCardImg}
                alt='Montagne en bord de mer'
                title='Chez vous, partout et ailleurs'
            />
            <main className='housing'>
                {isLoading ? (
                    <p>Chargement..</p>
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
