import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slider } from '../../components/Slider/Slider';
import HOUSING from '../../data/housing.json';

export function Housing() {
    const { id } = useParams();
    const [housing, setHousing] = useState({});
    const data = HOUSING.housing;

    useEffect(() => {
        const filteredHousing = data.filter((housing) => {
            return housing.id === id;
        });

        setHousing(filteredHousing[0]);
    }, [data, id]);

    return (
        <main>
            <Slider images={housing.pictures}/>
        </main>
    );
}
