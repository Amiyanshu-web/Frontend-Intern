import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from "react-bootstrap";

const MyCard = () => (
    <Card>
        <Card.Body>
            <Row>
                <Col xs={6}>
                    <Card.Img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Text>XYX</Card.Text>
                    <Card.Text>XYX</Card.Text>
                </Col>
                <Col xs={6}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card content and make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default MyCard;
