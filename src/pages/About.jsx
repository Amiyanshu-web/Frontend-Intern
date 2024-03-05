import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from "react-bootstrap";
import image1 from "../image1.png";
import image2 from "../image2.png";
const About = () => {
    return (
        <Card style={{ margin: "10px", border: "none" }}>
            <Card.Body>
                <Card.Title><h4>About Bitcoin</h4></Card.Title>
                <Card.Subtitle className="mb-2 mt-3"><b>What is Bitcoin?</b></Card.Subtitle>
                <Card.Text>
                    Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last
                    24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
                    low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                </Card.Text>
                <hr />
                <Card.Subtitle className="mb-2"><b>Lorem ipsum dolor sit amet</b></Card.Subtitle>
                <Card.Text>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus
                        urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
                        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
                        Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>

                    <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
                        Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus
                        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
                        Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
                        phasellus. Integer pellentesque enim convallis ultricies at.</p>

                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
                        semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
                        amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                </Card.Text>
                <hr />
                <Card.Title><h4>Already Holding Bitcoin?</h4></Card.Title>
                <Card.Text>
                    <Row>
                        <Col xs={12} md={6}><img src={image1} style={{ width: "90%", height: "80%" }}></img></Col>
                        <Col xs={12} md={6}><img src={image2} style={{ width: "90%", height: "80%" }}></img></Col>
                    </Row>
                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
                        semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
                        amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                </Card.Text>


            </Card.Body>
        </Card>
    );
}

export default About;
