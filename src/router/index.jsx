import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Housing } from '../pages/Housing/Housing';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import { useFetch } from '../utils/hooks';
import HOUSING from '../data/housing.json';

export function Router() {
    const { data, isLoading, error } = useFetch(HOUSING);
    const housing = data.housing

    return (
        <Routes>
            <Route path='/' element={<Home data={housing} isLoading={isLoading} error={error}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/housing/:id' element={<Housing data={housing} isLoading={isLoading} error={error}/>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}
