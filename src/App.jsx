import { useState } from 'react'
import ResponsiveNavbar from './component/ResponsiveNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCard from './component/CharacterCard'
import { Row, Col, Container } from "react-bootstrap";
import getStarted from "./getStarted.png";
import TrendingCoins from './component/TrendingCoins';
import About from './component/About';
import Tokenomics from './component/Tokenomics';
import Team from './component/Team';
import Sentiment from './component/Sentiment';
import { Performance } from './component/Performance';
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveNavbar />
      <Row >
        <Col xs={12} md={8}>
          <CharacterCard />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </Col>
        <Col xs={12} md={3}>
          <img src={getStarted} alt="" style={{ width: "25vw", marginTop: "10px" }}></img>
          <TrendingCoins />
        </Col>
      </Row>
    </>
  )
}

export default App
