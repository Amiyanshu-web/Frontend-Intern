import React, { useEffect, useState, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from "react-bootstrap";
// import { Chart as ChartJS, Doughnut } from 'chart.js/auto'
import Chart from 'chart.js/auto'

const data = {
    labels: ['Crowdsale Investors', 'Foundation'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [80, 20],
            backgroundColor: ['#3b82f6', '#e9ecef'], // Blue and orange colors
            hoverBackgroundColor: ['#377bff', '#e2e7ef'], // Slightly darker shades for hover effect
            borderColor: '#fff', // White border around each segment
            borderWidth: 1, // 1px border width
        },
    ],
};

const Tokenomics = () => {
    const chartContainer = useRef(null);


    return (
        <>
            <Card style={{ margin: "10px" }}>
                <Card.Body>
                    <Card.Title><h4>Tokenomics</h4></Card.Title>
                    <Card.Subtitle className="mb-2 mt-3"><b>Initial Distribution</b></Card.Subtitle>
                    <canvas ref={chartContainer} />
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