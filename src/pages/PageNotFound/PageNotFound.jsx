import React from 'react';
import { Link } from 'react-router-dom';
import './pagenotfound.scss';

export function PageNotFound() {
    return (
        <main className='page-not-found'>
            <div>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    );
}