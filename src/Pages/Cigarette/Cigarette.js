import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Clock from "../../Components/Cigarette/Clock/Clock";
import Day from "../../Components/Cigarette/Day/Day";


import ClickCigaretteButton from "../../Components/Cigarette/ClickCigaretteButton/ClickCigaretteButton";

import CigaretteResults from "../../Components/Cigarette/CigaretteResults/CigaretteResults";
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
                <ClickCigaretteButton />
                <Col>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <CigaretteResults />

                </Col>

            </Row>
        </Container>
    );
};

export default Cigarette;