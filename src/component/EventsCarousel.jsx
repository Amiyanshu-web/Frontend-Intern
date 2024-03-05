import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Row, Col, Container } from "react-bootstrap";
import icon1 from "../icon1.png";
import icon2 from "../icon2.png";

const EventsCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item >
                <div className="message-card blue" style={{ backgroundColor: '#e8f4fd', padding: "10px", borderRadius: "10px", marginBottom: "5px" }}>
                    <Row>
                        <Col xs={1}>
                            {/* <i className="fas fa-comment"></i> */}
                            <img src={icon1} alt=" " width={50} height={50}></img>
                        </Col>
                        <Col>
                            <h5>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                                sit amet consectetur</h5>
                            <p>
                                Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor
                                sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                Amet sapien quam viverra adipiscing condimentum. Ac consectetur et
                                pretium in a bibendum in. Sed vitae sit nisi viverra natoque
                                lacinia libero enim.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="message-card green" style={{ backgroundColor: '#ebf8f5', padding: "10px", borderRadius: "10px", marginBottom: "5px" }}>
                    <Row>
                        <Col xs={1}>
                            <img src={icon2} alt=" " width={50} height={50}></img>
                        </Col>
                        <Col>
                            <h5>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                                sit amet consectetur</h5>
                            <p>
                                Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor
                                sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                Amet sapien quam viverra adipiscing condimentum. Ac consectetur et
                                pretium in a bibendum in. Sed vitae sit nisi viverra natoque
                                lacinia libero enim.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default EventsCarousel;