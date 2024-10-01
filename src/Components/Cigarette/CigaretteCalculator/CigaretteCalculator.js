import React, { useEffect, useState } from 'react';

function CigaretteCalculator() {
    const [cigaretteCounter, setCigaretteCounter] = useState(() => {
       
        return parseInt(localStorage.getItem('cigaretteCounter')) || 0;
    });

    const [cigarettePrice, setCigarettePrice] = useState(() => {
        return parseFloat(localStorage.getItem('cigarettePrice')) || 0; 
    });

    const [cigarettePackSize, setCigarettePackSize] = useState(() => {
        return parseInt(localStorage.getItem('cigarettePackSize')) || 0; 
    });

    const [dailyCost, setDailyCost] = useState(0);
    const [shorterLife, setShorterLife] = useState(0);

    useEffect(() => {
        
        const newDailyCost = (cigaretteCounter / cigarettePackSize) * cigarettePrice;
        const newShorterLife = cigaretteCounter * 8; 

        setDailyCost(newDailyCost);
        setShorterLife(newShorterLife);
    }, [cigaretteCounter, cigarettePrice, cigarettePackSize]);

    return (
        <div>
            <h2>Podsumowanie dzienne</h2>
            <p>Ilość wypalonych papierosów: {cigaretteCounter}</p>
            <p>Koszt dzienny: {dailyCost.toFixed(2)} zł</p>
            <p>Skrócenie życia (minuty): {shorterLife}</p>
        </div>
    );
}

export default CigaretteCalculator;
