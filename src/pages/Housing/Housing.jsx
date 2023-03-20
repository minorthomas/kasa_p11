import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slider } from '../../components/Slider/Slider';

export function Housing({ data }) {
    const { id } = useParams();
    const [housing, setHousing] = useState({});

    useEffect(() => {
        const filteredHousing = data.filter((housing) => {
            return housing.id === id;
        });

        setHousing(filteredHousing[0]);
    }, [data, id]);

    return (
        <main>
            <Slider images={housing.pictures} title={housing.title}/>
        </main>
    );
}
