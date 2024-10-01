import React, { useState, useEffect } from 'react';

function CigaretteCounter() {
    const [count, setCount] = useState(() => {
        return parseInt(localStorage.getItem('cigaretteCounter')) || 0;
    });

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('cigaretteCounter', newCount); 
    };

    
    useEffect(() => {
        const now = new Date();
        const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

        const timeout = setTimeout(() => {
            setCount(0);
            localStorage.setItem('cigaretteCounter', 0); 
        }, millisTillMidnight);

        return () => clearTimeout(timeout);
    }, []); 

    return (
        <div>
            <button onClick={incrementCount} 
             style= {{

                background: 'url(https://zapodaj.net/thumbs/ca142206c347d.png) center/cover',
                width: '100px',
                height: '250px',

                }}>
                Wypalone papierosy ({count})
            </button>
        </div>
    );
}

export default CigaretteCounter;
