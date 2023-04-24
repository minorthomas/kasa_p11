import React from 'react';
import './tag.scss';
import PropTypes from 'prop-types';

export function Tag({tag}) {
    return (
        <li className='tag'>
            {tag}
        </li>
    );
}

Tag.propTypes = {
    tag: PropTypes.string
}