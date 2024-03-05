import { useState } from 'react'
import ResponsiveNavbar from './component/ResponsiveNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCard from './pages/CharacterCard'
import { Row, Col, Container } from "react-bootstrap";
import getStarted from "./getStarted.png";
import TrendingCoins from './component/TrendingCoins';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import Team from './pages/Team';
import Sentiment from './pages/Sentiment';
import { Performance } from './pages/Performance';
import './App.css';
import MayLike from './pages/MayLike';
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
          <img src={getStarted} alt="" className = "myimg" ></img>
          <TrendingCoins />
        </Col>
      </Row>
      <MayLike />
    </>
  )
}

export default App
