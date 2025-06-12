import React from 'react';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const RandomBox: React.FC = () => {
    const color = getRandomColor();
    const size = Math.floor(Math.random() * 100) + 50;

    return (
        <>
           
        </>
    );
};

export default RandomBox;