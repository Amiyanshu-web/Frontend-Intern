import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const TrendingCoins = () => {
    return (
        <Card style={{ marginTop:"10px", border:"none"}}>
            <Card.Header style={{ border: 'none' }}><h4>Trending Coins (24h)</h4></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item style={{ border: 'none' }}>
                    <span>🟢 Ethereum (ETH)</span>
                    <span style={{ float: 'right', color: '#00b074' }}>▲ 8.21%</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ border: 'none' }}>
                    <span>₿ Bitcoin (BTC)</span>
                    <span style={{ float: 'right', color: '#00b074' }}>▲ 5.26%</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ border: 'none' }}>
                    <span>⬡ Polygon (MATIC)</span>
                    <span style={{ float: 'right', color: '#00b074' }}>▲ 4.32%</span>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default TrendingCoins;
