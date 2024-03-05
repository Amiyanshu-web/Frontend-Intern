import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';
const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch trending coins data
                const trendingResponse = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const top3Coins = trendingResponse.data.coins.slice(0, 3); // Get top 3

                // Update state
                setTrendingCoins(top3Coins);
            } catch (error) {
                console.error(error); // Handle errors appropriately
            }
        };

        fetchData();
    }, []);
    console.log(trendingCoins);
    return (
        <Card style={{ marginTop: "10px", border: "none" }}>
            <Card.Header style={{ border: 'none' }}><h4>Trending Coins (24h)</h4></Card.Header>
            <ListGroup variant="flush">
                {trendingCoins.map((coins) => {
                    return (
                        <ListGroup.Item style={{ border: 'none' }}>
                            <Row>

                                <Col md={8}><img src={coins.item.thumb} alt="" style={{ borderRadius: "50%", height: "30px", width: "30px" }}></img> &nbsp; {coins.item.name}</Col>
                                {coins.item.data.price_change_percentage_24h.btc >= 0 ? <Col style={{ float: 'right', color: '#00b074', fontSize: "14px" }}>▲ {coins.item.data.price_change_percentage_24h.btc.toFixed(2)}%</Col> : <Col style={{ float: 'right', color: 'red', fontSize: "14px" }}> ▼ {coins.item.data.price_change_percentage_24h.btc.toFixed(2)}%</Col>}
                            </Row>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </Card>
    );
}

export default TrendingCoins;
