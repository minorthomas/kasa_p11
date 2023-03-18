import React from 'react';
import { Dropdown } from '../../components/Dropdown/Dropdown';

const list = ['test', 'test3', 'test3', 'bonjour'];

export function About() {
    return (
        <div>
            <Dropdown
                type='paragraph'
                title='Respect'
                content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme'
            />
            <br />
            <Dropdown
                type='list'
                title='Respect'
                content={list.map((liste, index) => (
                    <li key={index}>{liste}</li>
                ))}
            />
        </div>
    );
}
