import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Slider } from '../../components/Slider/Slider';
import { Tag } from '../../components/Tag/Tag';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import './housing.scss';
import { Rating } from '../../components/Rating';
import { Loader } from '../../shared/Loader/Loader';
import PropTypes from 'prop-types';

export function Housing({ data, isLoading, error }) {
    const { id } = useParams();
    const [housing, setHousing] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        function filter() {
            if (data) {
                const filteredHousing = data.filter((housing) => {
                    return housing.id === id;
                });
                if (filteredHousing.length === 0) {
                    return navigate('/404');
                } else {
                    setHousing(filteredHousing[0]);
                }
            }
        }
        filter();
    }, [data, id, navigate]);

    if (error) {
        return <p>Erreur...</p>;
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <main className='accommodation'>
            <Slider images={housing.pictures} title={housing.title} />
            <section className='accommodation_info'>
                <div>
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    {housing.tags && (
                        <ul>
                            {housing.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    <Rating rating={housing.rating} id={housing.id} />
                    <div className='host'>
                        {housing.host && (
                            <>
                                <p>{housing.host.name}</p>
                                <img
                                    src={housing.host.picture}
                                    alt={`${housing.host.name}-portrait`}
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>
            <ul className='accommodation_dropdown'>
                {housing.description && (
                    <Dropdown
                        title='Description'
                        type='paragraph'
                        content={housing.description}
                    />
                )}
                {housing.equipments && (
                    <Dropdown
                        title='Équipements'
                        type='list'
                        content={housing.equipments.map((equip, index) => (
                            <li key={index}>{equip}</li>
                        ))}
                    />
                )}
            </ul>
        </main>
    );
}

Housing.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool
}