import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import './navigation.scss';

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
        <li className='link'>
            <NavLink
                to={route}
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                {text}
            </NavLink>
        </li>
    );
}

export function Navigation() {
    const [toggleNav, setToggleNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    function toggleNavSmallScreen() {
        setToggleNav(!toggleNav);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);

            if (window.innerWidth >= 576) {
                setToggleNav(false);
            }
        });
    }, []);

    return (
        <header>
            <nav>
                <Link className='logo' to='/'>
                    <Logo />
                </Link>
                {(toggleNav || width >= 576) && (
                    <ul>
                        {PAGES.map((link, index) => (
                            <CreateLink
                                key={index}
                                route={link.route}
                                text={link.text}
                            />
                        ))}
                    </ul>
                )}
                {width < 576 && (
                    <button onClick={toggleNavSmallScreen}>
                        <svg
                            clipRule='evenodd'
                            fillRule='evenodd'
                            strokeLinejoin='round'
                            strokeMiterlimit='2'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z'
                                fillRule='nonzero'
                            />
                        </svg>
                    </button>
                )}
            </nav>
        </header>
    );
}
