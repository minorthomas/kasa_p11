import React from 'react';
import './tag.scss';

export function Tag({tag}) {
    return (
        <li className='tag'>
            {tag}
        </li>
    );
}