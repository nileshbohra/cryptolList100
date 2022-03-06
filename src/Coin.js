import React from 'react'
import './Coin.css'

const Coin = ({ image, name, price, rank, volume, pricechange, marketcap }) => {
    let inr = Intl.NumberFormat('en-IN');
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className='coin-pos'>{rank}</div>
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{inr.format(price)}</p>
                    {pricechange < 0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                    }
                    <p className="coin-marketcap">
                        ₹ {inr.format(marketcap)}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Coin
