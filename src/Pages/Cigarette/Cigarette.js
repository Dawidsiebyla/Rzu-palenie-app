import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Clock from "../../Components/Cigarette/Clock/Clock";
import Day from "../../Components/Cigarette/Day/Day";
import CigaretteCalculator from '../../Components/Cigarette/CigaretteCalculator/CigaretteCalculator';
import CigaretteCounter from '../../Components/Cigarette/CigaretteCounter/CigaretteCounter';

const Cigarette = () => {
    return (
        <Container>
        <Row>
            <Col>
                <Clock/>
            </Col>
            <Col>
                <Day/>
            </Col>
        </Row>


        <Row>
            <CigaretteCounter/>
            <Col>
                
            </Col>
        </Row>
        <CigaretteCalculator/>
        <Row>
            <Col>
                

            </Col>

        </Row>
    </Container>
    );
};

export default Cigarette;