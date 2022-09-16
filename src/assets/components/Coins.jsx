import Card from 'react-bootstrap/Card';
import "./Coins.css";

function Coins({name, icon, price, symbol}) {
    let coinPrice = price.toFixed(2);
    return (
        <div className='cards-section'>
        <Card className="coin-card">
        <h1 className='coin-name'>{name}</h1>
        <img src={icon} alt="coin-icon" width="60"/>
        <h3 className='coin-price'>Price: {`$${coinPrice}`}</h3>
        <h3 className='coin-symbol'>Symbol: {symbol}</h3>
        </Card>
        </div>
    );
}

export default Coins;