import React, { useState,useEffect } from 'react';

import CigaretteCalculator from "../CigaretteCalculator/CigaretteCalculator";
import CigarettePropose from "../CigarettePropose/CigarettePropose";
import CigaretteResults from '../CigaretteResults/CigaretteResults';


const ClickCigaretteButton = () => {
    const [clickCount, setClickCount] = useState(0);
    const [startOfDay, setStartOfDay] = useState(new Date().setHours(0, 0, 0, 0));
    const cigarettesPerClick = 1;

    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const startOfNextDay = new Date(now);
          startOfNextDay.setHours(0, 0, 0, 0);
          startOfNextDay.setDate(startOfNextDay.getDate() + 1);
    
          if (now >= startOfNextDay) {
            setClickCount(0);
            setStartOfDay(startOfNextDay.getTime());
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [startOfDay]);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };

    const smokedToday = clickCount * cigarettesPerClick;

    return (
        <div>
            <button onClick={handleButtonClick}
                    style= {{

                        background: 'url(https://zapodaj.net/thumbs/ca142206c347d.png) center/cover',
                        width: '100px',
                        height: '250px',

                    }}
            >
                Click me! ({clickCount} clicks)
            </button>
            <p>Smoked today: {smokedToday} cigarettes</p>

            <CigaretteCalculator smokedToday={smokedToday}/>
            <CigarettePropose smokedToday={smokedToday}/>
            <CigaretteResults smokedToday={smokedToday}/>
        </div>
    );
};

export default ClickCigaretteButton;
