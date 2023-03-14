import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../components/Logo';

const PAGES = [
    {
        text: 'Accueil',
        route: '/',
    },
    {
        text: 'A propos',
        route: '/about',
    },
];

function CreateLink({ route, text }) {
    return (
        <li>
            <NavLink
                to={route}
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                {text}
            </NavLink>
        </li>
    );
}

export function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>
                    <Logo />
                </Link>
                <ul>
                    {PAGES.map((link, index) => (
                        <CreateLink
                            key={index}
                            route={link.route}
                            text={link.text}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
