import React from 'react';
import Card from 'react-bootstrap/Card';
    import { Row, Col } from "react-bootstrap";

const MyCard = ({ image, name, designation, about }) => (
    <Card style={{ backgroundColor: '#e8f4fd', border: "none", marginBottom: "10px" }}>
        <Card.Body>
            <Row>
                <Col xs={12} md={2} className="d-flex align-items-center flex-column">
                    <Card.Img src={image} width={100} />
                    <div className="text-center">
                        <Card.Title style={{ fontSize: "15px" }}>{name}</Card.Title>
                        <Card.Subtitle className="text-muted" style={{ fontSize: '12px' }}>{designation}</Card.Subtitle>
                    </div>
                </Col>
                <Col xs={12} md={9}>
                    <Card.Text>
                        <p style={{ fontSize: "14px", marginTop: "5px" }}>
                            {about}
                        </p>
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default MyCard;
