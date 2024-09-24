import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DailyBalance from "../../Components/DailyBalance/DailyBalance";
import WeeklyBalance from "../../Components/WeeklyBalance/WeeklyBalance";
import YesterdayTodayBalance from "../../Components/Yesterday-TodayBalance/Yesterday-TodayBalance";
const Statistics = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <DailyBalance />
                </Col>
                <Col>
                    <YesterdayTodayBalance />
                </Col>
                <Col>
                    <WeeklyBalance />
                </Col>
            </Row>

        </Container>
    );
};

export default Statistics;