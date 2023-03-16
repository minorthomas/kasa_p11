import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Housing } from '../pages/Housing/Housing';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/housing/:id' element={<Housing />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}
