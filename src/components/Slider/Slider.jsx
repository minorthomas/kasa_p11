import React, { useEffect, useState } from 'react';

export function Slider({ images, title }) {
    const [currentImg, setCurrentImg] = useState(null);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        setGallery(images);
        if (images) {
            setCurrentImg(0)
        }
    }, [images]);

    function handlePrev() {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    }

    function handleNext() {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    }

    return (
        <div className='slider'>
            <button onClick={handlePrev}>Précédent</button>
            {currentImg !== null && (
                <img src={gallery[currentImg]} alt={`Logement`} />
            )}
            <button onClick={handleNext}>Suivante</button>
        </div>
    );
}
