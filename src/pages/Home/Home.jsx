import React from 'react';
import { Card } from '../../components/Card/Card';
import HOUSING from '../../data/housing.json';

export function Home() {
    const data = HOUSING.housing;

    return (
        <>
            <section></section>
            <main>
                {/* {data.map((housing) => (
                    <Card source={housing.cover} title={housing.title} />
                ))} */}
            </main>
        </>
    );
}
