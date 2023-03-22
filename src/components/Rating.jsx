import React from 'react';

export function Rating({ rating, id }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <ul className='rating'>
            {stars.map((star) => (
                <li key={star}>
                    {star && (
                        <>
                            <svg
                                
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill={star <= rating ? '#FF6060' : '#E3E3E3'}
                            >
                                <path
                                    d='M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z'
                                />
                            </svg>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
