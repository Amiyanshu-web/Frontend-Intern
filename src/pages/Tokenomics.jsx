import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Crowdsale Investors', 'Foundation'],
    datasets: [
        {
            label: '',
            data: [80, 20],
            backgroundColor: ['blue', 'orange'], // Blue and orange colors
            hoverBackgroundColor: ['#377bff', '#e2e7ef'], // Slightly darker shades for hover effect
            borderColor: '#fff', // White border around each segment
            borderWidth: 1, // 1px border width
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const Tokenomics = () => {
    return (
        <>
            <Card style={{ margin: "10px", border:"none"}}>
                <Card.Body>
                    <Card.Title><h4>Tokenomics</h4></Card.Title>
                    <Card.Subtitle className="mb-2 mt-3"><b>Initial Distribution</b></Card.Subtitle>
                    <Row>
                        <Col md={6} className="d-flex align-items-center">
                            <Doughnut data={data} options={chartOptions} width={200} height={200} />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div className="text-right">
                                <ul className="list-unstyled">
                                    <li>🔵 Crowdsale Investors: 80%</li>
                                    <li>🟠 Foundation: 20%</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
                        consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
                        lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
                        fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
                        eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
                        odio nisi eu ac risus
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Tokenomics;