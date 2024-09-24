
import React, {useState, useEffect} from 'react';

const Clock = () => {
    const  [time, setTime] = useState(new Date());
    useEffect(() => {
        const Interval = setInterval(()=>{
            setTime(new Date());
            }, 1000);
        return () => clearInterval(Interval);

        }, []);



    return (
        <div>
            <h1>Aktualna godzina: {time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;