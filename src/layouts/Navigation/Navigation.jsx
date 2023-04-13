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
    return (
        <header>
            <nav>
                <Link className='logo' to='/'>
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
