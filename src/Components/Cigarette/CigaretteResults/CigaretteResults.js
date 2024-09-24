import React from 'react';

function CigaretteResults({ totalCostToday, hoursLost }) {
    return (
        <div>
            <p>Total cost today: {totalCostToday}</p>
            <p>Shortened life today: {hoursLost} hours</p>
        </div>
    );
}

export default CigaretteResults;