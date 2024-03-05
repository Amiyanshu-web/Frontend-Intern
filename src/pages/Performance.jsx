import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import performance1 from '../image/performance1.png'
import performance2 from '../image/performance2.png'
export const Performance = () => {
    return (
        <Card style={{ margin: "10px", border:"none"}}>
            <Card.Body>
                <Card.Title><h4>Performance</h4></Card.Title>
                <Card.Img src={performance1} width={100} />
                <Card.Img src={performance2} width={100} />
                <Card.Subtitle className="mb-2 mt-3 text-muted"><h5>Fundamentals <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg></h5></Card.Subtitle>
                {/* <Row className='mb-4'>
                    <Col>
                        <img src={performance1} alt=""></img>
                    </Col>
                    <Col>
                        <img src={performance2} alt=""></img>

                    </Col>
                </Row> */}
                <Row className='mt-3'>
                    <Col xs={12} md={6}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Bitcoin Price</p>
                            <p style={{ margin: '0' }}><strong>$16,815.46</strong></p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>24h Low / 24h High</p>
                            <p style={{ margin: '0' }}><strong>$16,382.07 / $16,874.12</strong></p>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>7d Low / 7d High</p>
                            <p style={{ margin: '0' }}><strong>$16,382.07 / $16,874.12</strong></p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Trading Volume</p>
                            <p style={{ margin: '0' }}><strong>$23,249,202,782</strong></p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Market Cap Rank</p>
                            <span><strong>#1</strong></span>
                        </div>
                        <hr />

                    </Col>
                    <Col xs={12} md={6}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Market Cap</p>
                            <p style={{ margin: '0' }}><strong>$323,507,290,047</strong></p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Market Cap Dominance</p>
                            <p style={{ margin: '0' }}><strong>38.343%</strong></p>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>Volume / Market Cap</p>
                            <p style={{ margin: '0' }}><strong>0.0718</strong></p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>All Time High</p>
                            <p style={{ margin: '0' }}><strong>$69,044.77 <span style={{ color: "red" }}>-75.6%</span></strong>
                                <br />
                                <span className="text-muted" style={{ fontSize: "11px" }}>Nov 10, 2021 (about 1 year)</span>
                            </p>
                        </div>
                        <hr />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className = "text-muted" style={{ margin: '0' }}>All Time Low</p>
                            <p style={{ margin: '0' }}><strong>$67.81 <span style={{ color: "green" }}>24729.1%</span></strong>
                                <br />
                                <span className="text-muted" style={{ fontSize: "11px" }}>Jul 06, 2013 (over 9 years)</span>
                            </p>
                        </div>
                        <hr />
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    );
}
