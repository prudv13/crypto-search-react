import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import Coins from './assets/components/Coins';
import {Container , Row, Col} from 'react-bootstrap';

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=25")
    .then((response)=>{
      console.log(response.data);
      setListOfCoins(response.data.coins);
    })
  }, []);

  const filteredCoins = listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  return (
    <Container fluid>
    <Row>
      <Col>
        <div className='header-section'>
          <h2 className='main-header'>CRYPTO SEARCH</h2>
          <input 
            className="search-input"
            type="text" 
            placeholder="search crypocurrency..."
            onChange={(event)=>{setSearchCoin(event.target.value)}}
          />
        </div>
        </Col>
        <Col>
        <div className='display-section'>
          {filteredCoins.map((coin)=> <Coins key={coin.id} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
          )}
        </div>
      </Col>
    </Row>
    </Container>
    
  )
}

export default App

// <video autoPlay loop muted className='bg-video'>
//   <source src="../public/crypto-bgvideo.mp4" type="video/mp4"/>
// </video>
