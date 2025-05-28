import React from 'react';

export const Intro = ({ type }) => (
    <div className='flex intro'>
        <img src={`media/layout/${type}.png`} alt={type} />
    </div>
);