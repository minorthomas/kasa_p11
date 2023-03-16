import React from 'react';
import { Navigation } from './layouts/Navigation/Navigation';
import { Footer } from './layouts/Footer/Footer';
import { Router } from './router';

function App() {
    return (
        <>
            <Navigation></Navigation>
            <Router/>
            {/* <Footer></Footer> */}
        </>
    );
}

export default App;