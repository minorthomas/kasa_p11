import React from 'react';
import './about.scss';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { HeroCard } from '../../components/HeroCard';
import HeroCardImg from '../../assets/img/about_hero-card.webp';

export function About() {
    const aboutDropdown = [
        {
            title: 'Fiabilité',
            content:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
            type: 'paragraph',
        },
        {
            title: 'Respect',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            type: 'paragraph',
        },
        {
            title: 'Service',
            content:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            type: 'paragraph',
        },
        {
            title: 'Sécurité',
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            type: 'paragraph',
        },
    ];

    return (
        <main className='about'>
            <HeroCard identifier='about_hero' source={HeroCardImg} alt='Forêt près des montagnes enneigées'/>
            <ul className='about_dropdown'>
                {aboutDropdown.map((element, index) => (
                    <Dropdown
                        key={index}
                        type={element.type}
                        title={element.title}
                        content={element.content}
                    />
                ))}
            </ul>
        </main>
    );
}
