import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavTop from "../../Components/NavTop/NavTop";
import CigaretteForm from "../../Components/Cigarette/CigaretteForm/CigaretteForm";
import FormGroupExample from "../../Components/Formularz/FormGroupExample/FormGroupExample";
import PageButton from "../../Components/buttons/PageButton/PageButton";
import Footer from "../../Components/Footer/Footer";

function ResponsiveAutoExample() {
  return (
      <Container>
        <Row>
            <NavTop/>
            <Col sm={8}></Col>

            <Col sm={4}></Col>
        </Row>
          <Row>
              <FormGroupExample/>
              <RangeSlider/>
              <Col sm></Col>
              <Col></Col>
              <PageButton />
              <Col sm></Col>
        </Row>
          <Row >
              <Footer/>
          </Row>
      </Container>
  );
}

export default ResponsiveAutoExample;