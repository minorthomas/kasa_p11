import React from 'react';
import { useFetch } from '../../utils/hooks';
import HOUSING from '../../data/housing.json';

export function About() {
    const { data, isLoading, error } = useFetch(HOUSING);

    return (
        <div>
            About
        </div>
    );
}
