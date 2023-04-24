import { Navigation } from "./Navigation/Navigation";
import { Footer } from './Footer/Footer';
import PropTypes from 'prop-types';

export function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer/>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.element,
}