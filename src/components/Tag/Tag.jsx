import React from 'react';
import './tag.scss';

export function Tag({tag}) {
    return (
        <div className='tag'>
            {tag}
        </div>
    );
}