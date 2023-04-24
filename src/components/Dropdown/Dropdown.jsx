import React, { useState } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

export function Dropdown({ title, content, type }) {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    function handleToggle() {
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <li className='dropdown'>
            <button onClick={handleToggle}>
                <p>{title}</p>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className={toggleDropdown ? 'open' : ''}
                >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                </svg>
            </button>

            {toggleDropdown && type === 'paragraph' && <p>{content}</p>}
            {toggleDropdown && type === 'list' && <ul>{content}</ul>}
        </li>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
};
