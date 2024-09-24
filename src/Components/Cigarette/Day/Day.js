import React, {useState, useEffect} from 'react';



const Day = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
       const Interval= setInterval(()=>{
           setCurrentDate(new Date()); },1000);
        return ()=> clearInterval(Interval);
       },[]);









    return (
        <div>
            <h2>Aktualna data: {currentDate.toLocaleDateString()}</h2>
        </div>
    );
};

export default Day;