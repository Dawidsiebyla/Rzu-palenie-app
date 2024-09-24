import React, {useState} from 'react';

import CigaretteResults from "../CigaretteResults/CigaretteResults";





const CigaretteCalculator = ({ smokedToday, setCigarettePrice, setCigarettePackSize }) => {
    const minutesLostPerCigarette = 8;

    console.log('smokedToday:', smokedToday);
    console.log('cigarettePrice:', setCigarettePrice);
    console.log('cigarettePackSize:', setCigarettePackSize);

    const totalCostToday = (setCigarettePrice / setCigarettePackSize) * smokedToday;
    const hoursLost = (minutesLostPerCigarette * smokedToday) / 60;

    console.log('totalCostToday:', totalCostToday);

    return (
        <div>

            <CigaretteResults totalCostToday={totalCostToday} hoursLost={hoursLost}/>
        </div>
    );
};



export default CigaretteCalculator;



