import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slider } from '../../components/Slider/Slider';
import { Tag } from '../../components/Tag/Tag';
import { Dropdown } from '../../components/Dropdown/Dropdown';
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
                            <div className='rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                            </div>
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
                                content={housing.equipments.map(
                                    (equip, index) => (
                                        <li key={index}>{equip}</li>
                                    )
                                )}
                            />
                        )}
                    </ul>
                </main>
            )}
        </>
    );
}
