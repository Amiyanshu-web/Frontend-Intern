import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Carousel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const MayLike = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const trendingResponse = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                setTrendingCoins(trendingResponse.data.coins);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const itemsPerSlide = 4; // Number of items per slide

    return (
        <Card style={{ border: "none" }}>
            <Card.Body style={{ padding: "3em" }}>
                <Card.Title><h4 style={{ marginBottom: "10px" }}>You May Also Like</h4></Card.Title>
                <Carousel
                    prevIcon={<BsChevronLeft style={{ color: 'black' }} />}
                    nextIcon={<BsChevronRight style={{ color: 'black' }} />}>
                    {trendingCoins.map((coins, index) => {
                        // Group the items based on the number of items per slide
                        if (index % itemsPerSlide === 0) {
                            return (
                                <Carousel.Item key={index}>
                                    <Row>
                                        {trendingCoins.slice(index, index + itemsPerSlide).map((coin, subIndex) => (
                                            <Col key={subIndex} style={{ border: "1px solid #D0D0D0", padding: "1em", margin: "5px", borderRadius: "5px" }}>
                                                <img src={coin.item.thumb} alt="" style={{ borderRadius: "50%", height: "30px", width: "30px" }}></img> &nbsp; {coin.item.name}
                                                {coin.item.data.price_change_percentage_24h.btc >= 0 ?
                                                    <span style={{ float: 'right', color: '#00b074', fontSize: "14px" }}>▲ {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%</span> :
                                                    <span style={{ float: 'right', color: 'red', fontSize: "14px" }}> ▼ {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%</span>}
                                                <h5 style={{ padding: "1em" }}> {coin.item.data.price}</h5>
                                                <img src={coin.item.data.sparkline} alt="Sparkline" style={{ width: '100%' }} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            )
                        }
                        return null;
                    })}
                </Carousel>
                <Card.Title><h4 style={{ marginBottom: "10px", marginTop: "1em" }}>Trending Coins</h4></Card.Title>
                <Carousel
                    prevIcon={<BsChevronLeft style={{ color: 'black' }} />}
                    nextIcon={<BsChevronRight style={{ color: 'black' }} />}>
                    {trendingCoins.map((coins, index) => {
                        // Group the items based on the number of items per slide
                        if (index % itemsPerSlide === 0) {
                            return (
                                <Carousel.Item key={index}>
                                    <Row>
                                        {trendingCoins.slice(index, index + itemsPerSlide).map((coin, subIndex) => (
                                            <Col key={subIndex} style={{ border: "1px solid #D0D0D0", padding: "1em", margin: "5px", borderRadius: "5px" }}>
                                                <img src={coin.item.thumb} alt="" style={{ borderRadius: "50%", height: "30px", width: "30px" }}></img> &nbsp; {coin.item.name}
                                                {coin.item.data.price_change_percentage_24h.btc >= 0 ?
                                                    <span style={{ float: 'right', color: '#00b074', fontSize: "14px" }}>▲ {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%</span> :
                                                    <span style={{ float: 'right', color: 'red', fontSize: "14px" }}> ▼ {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%</span>}
                                                <h5 style={{ padding: "1em" }}> {coin.item.data.price}</h5>
                                                <img src={coin.item.data.sparkline} alt="Sparkline" style={{ width: '100%' }} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            )
                        }
                        return null;
                    })}
                </Carousel>

            </Card.Body>
        </Card>
    )
}

export default MayLike;
