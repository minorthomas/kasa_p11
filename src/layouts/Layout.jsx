import { Navigation } from "./Navigation/Navigation";
import { Footer } from './Footer/Footer';
export function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer/>
        </>
    );
}