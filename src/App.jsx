import React from 'react';
import { Header } from './layouts/Header/Header';
import { Footer } from './layouts/Footer/Footer';
import { Router } from './router';

function App() {
    return (
        <>
            <Header></Header>
            <Router/>
            <Footer></Footer>
        </>
    );
}

export default App;