import React, { useState } from 'react';
import './slider.scss';

export function Slider({ images, title }) {
    const [currentImg, setCurrentImg] = useState(0);
    const minLength = 2;

    function handlePrev() {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    }

    function handleNext() {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    }

    return (
        <>
            {images && (
                <div className='slider'>
                    {images.length >= minLength && (
                        <>
                            <button
                                className='slider_btn slider_btn-prev'
                                onClick={handlePrev}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                                </svg>
                            </button>
                            <p className='slider_index'>{`${currentImg + 1}/${
                                images.length
                            }`}</p>
                            <button
                                className='slider_btn slider_btn-next'
                                onClick={handleNext}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                                </svg>
                            </button>
                        </>
                    )}

                    <img
                        className='slider_img'
                        src={images[currentImg]}
                        alt={title}
                    />
                </div>
            )}
        </>
    );
}
