import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Badge } from 'react-bootstrap';
import TradingViewWidget from './TradingViewWidget';

function CharacterCard() {
    const imageUrl = 'https://via.placeholder.com/300x200'; // Replace with your actual image URL
    const title = 'Card Title';
    const text = 'Card text content.';

    return (
        <Card style={{ margin: "10px", border:"none"}}>
            <Card.Body>
                <Card.Title>
                    <span role="img" aria-label="bitcoin">
                        ₿
                    </span>{' '}
                    Bitcoin BTC{' '}
                    <Badge variant="secondary" className="float-right">
                        Rank #1
                    </Badge>
                </Card.Title>
                <Card.Text style={{ fontSize: '24px', color: '#000' }}>
                    $46,953.04{' '}
                    <span style={{ color: '#00cc00', fontSize: '18px' }}>2.51% (24H)</span>
                </Card.Text>
                <Card.Text style={{ fontSize: '18px', color: '#888' }}>₹39,42,343</Card.Text>
                <TradingViewWidget />
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;
