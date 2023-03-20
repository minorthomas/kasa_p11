import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slider } from '../../components/Slider/Slider';
import { Tag } from '../../components/Tag/Tag';
import './housing.scss';

export function Housing({ data, isLoading, error }) {
    const { id } = useParams();
    const [housing, setHousing] = useState({});

    useEffect(() => {
        if (data) {
            const filteredHousing = data.filter((housing) => {
                return housing.id === id;
            });
            setHousing(filteredHousing[0]);
        }
    }, [data, id]);

    return (
        <>
            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <main>
                    <Slider images={housing.pictures} title={housing.title} />
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    {housing.tags && (
                        <>
                            {housing.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))}
                        </>
                    )}
                </main>
            )}
        </>
    );
}
