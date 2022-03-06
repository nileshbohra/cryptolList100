import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error))
  }, [])
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="coin-app">
      <h1 className='app-heading'>Crypto<span>List</span></h1>
      <div className="coin-search">
        {/* <h1 className="coin-text">Search your desired coin</h1> */}
        <form action="">
          <input type="text" className="coin-input" placeholder="search coin" onChange={handleChange} />

        </form>

      </div>
      <div className='index'>
        <div className='idx-start'>
          <span className='idx'>
            #
          </span>
          <span className='idx-name'>
            Name
          </span>
        </div>
        <div className='idx-end'>
          <span className='idx-price'>
            Price
          </span>
          <span className='idx-24'>
            24h %
          </span>
          <span className='idx-mkt'>
            Market Cap
          </span>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}


    </div>
  );
}

export default App;
