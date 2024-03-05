import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import EventsCarousel from './EventsCarousel';
import stock from '../stock.png';

const Sentiment = () => {

    return (
        <Card style={{ margin: "10px", border:"none" }}>
            <Card.Body>
                <Card.Title><h4>Sentiments</h4></Card.Title>
                <Card.Subtitle className="mb-3 mt-3 text-muted"><h5>Key Events <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg></h5></Card.Subtitle>
                <EventsCarousel />
                <Card.Subtitle className="mb-3 mt-3 text-muted"><h5>Analyst Estimates <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg></h5></Card.Subtitle>
                <Card.Img src={stock}></Card.Img>
            </Card.Body>
        </Card>
    );
}

export default Sentiment;