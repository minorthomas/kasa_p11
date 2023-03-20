import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Housing } from '../pages/Housing/Housing';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import HOUSING from '../data/housing.json';

export function Router() {
    const data = HOUSING.housing;

    return (
        <Routes>
            <Route path='/' element={<Home data={data}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/housing/:id' element={<Housing data={data}/>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}
