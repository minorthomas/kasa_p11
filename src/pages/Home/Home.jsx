import React from 'react';
import { Card } from '../../components/Card';
import { TopCard } from '../../components/TopCard';
import HOUSING from '../../data/housing.json';
import TopCardImg from '../../assets/img/home_top-card.webp';
import './home.scss';

export function Home() {
    const data = HOUSING.housing;

    return (
        <>
            <TopCard identifier='top-card' source={TopCardImg} alt='Montagne en bord de mer' title='Chez vous, partout et ailleurs'/>
            <main className='housing'>
                {data.map((housing) => (
                    <Card key={housing.id} id={housing.id} cssClass='housing_card' source={housing.cover} title={housing.title} />
                ))}
            </main>
        </>
    );
}
