import React, { useState, useEffect } from 'react';
import { fetchResp } from "./utils";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import CigaretteCalculator from "../CigaretteCalculator/CigaretteCalculator";
import CigarettePropose from "../CigarettePropose/CigarettePropose";
import CigaretteResults from '../CigaretteResults/CigaretteResults';
function CigaretteForm() {
    
    const [cigaretteCount, setCigaretteCount] = useState(0);
    const [cigarettePrice, setCigarettePrice] = useState(0);
    const [cigarettePackSize, setCigarettePackSize] = useState(0);
    const [cigarettePropose, setCigarettePropose] =useState(0);
    const [formValid,setFormValid]= useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/cigarette")
            .then(fetchResp)
            
            .catch((err) => console.log(err));
    }, []);


    const validateForm = () => {
        if (cigaretteCount > 0 && cigarettePrice > 0 && cigarettePackSize > 0 && cigarettePropose > 0) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formValid) {
            console.log('Dane zapisane:', {
                cigaretteCount,
                cigarettePrice,
                cigarettePackSize,
                cigarettePropose,
            });
        } else {
            console.log('Formularz niepoprawny. Uzupełnij wszystkie pola.');
        }
    };









    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label>Ilość dotychczas wypalanych papierosów: {cigaretteCount} </label>
                <RangeSlider
                    value={cigaretteCount}
                    onChange={(e) => {
                        setCigaretteCount(e.target.value);
                        validateForm();

                    }}
                    min={0}
                    max={80}
                />

                <label>Cena za paczkę papierosów: {cigarettePrice} </label>
                <RangeSlider
                    value={cigarettePrice}
                    onChange={(e) => {
                        setCigarettePrice(e.target.value);
                        validateForm();

                    }}
                    min={0}
                    max={50}
                    step={0.1}
                />

                <label>Ilość sztuk papierosów w paczce: {cigarettePackSize} </label>
                <RangeSlider
                    value={cigarettePackSize}
                    onChange={(e) => {
                        setCigarettePackSize(e.target.value);
                        validateForm();

                    }}
                    min={0}
                    max={50}
                />
                <label>Mój cel: {cigarettePropose} </label>
                <RangeSlider
                    value={cigarettePropose}
                    onChange={(e) => {
                        setCigarettePropose(e.target.value);
                        validateForm();

                    }}
                    min={0}
                    max={50}
                />


                <button onSubmit={handleFormSubmit} >
                    Zapisz
                </button>
                <CigaretteCalculator setCigarettePrice={setCigarettePrice} setCigarettePackSize={setCigarettePackSize}/>
                <CigarettePropose cigarettePropose={cigarettePropose} />
                <CigaretteResults cigarettePrice={cigarettePrice} cigarettePackSize={cigarettePackSize}/>
            </form>
        </>
    );
}


export default CigaretteForm;
