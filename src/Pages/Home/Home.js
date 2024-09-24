import React from 'react';
import Container from 'react-bootstrap/Container';


import FormGroupExample from "../../Components/Formularz/FormGroupExample/FormGroupExample";
import CigaretteForm from '../../Components/Cigarette/CigaretteForm/CigaretteForm';



const Home = () => {
    return (
        <div className="container-fluid">
        <Container>
            
            <FormGroupExample />
            <CigaretteForm/>   
        </Container>
     </div>
    );
};

export default Home;
