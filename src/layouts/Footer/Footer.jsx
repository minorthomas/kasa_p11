import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import './footer.scss';

export function Footer() {
    return (
        <footer>
            <Link to='/'>
                <Logo />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
