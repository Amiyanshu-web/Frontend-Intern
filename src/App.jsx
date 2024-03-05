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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <ResponsiveNavbar />
      <Row >
        <Col xs={12} md={8}>
          <CharacterCard />
          <About />
          <Tokenomics />
          <Team />
        </Col>
        <Col xs={12} md={3}>
          <img src={getStarted} alt="" style={{ height: "20%", marginTop: "10px" }}></img>
          <TrendingCoins />
        </Col>
      </Row>
    </>
  )
}

export default App
