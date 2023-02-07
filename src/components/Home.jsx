import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCoin } from '../Redux/Coins/CoinSlice';

const Home = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.coins.loading);
  const allCoins = useSelector((state) => state.coins.data.coins);

  return (
    <div className="">
      <div className="w-[100%] flex justify-center items-center">
        <form className="text-white flex items-center justify-center w-[90%] md:w-[60%] m-2">
          <input onKeyUp={(e) => { setQuery(e.target.value.toLowerCase()); }} className="bg-[#0d0b13] px-4 py-2 outline-none w-[80%] border border-white/50 rounded-l-full focus:border-violet-600/50 focus:shadow-sm shadow-violet-400" type="text" placeholder="Search Coin name" required />
          <input onClick={(e) => { e.preventDefault(); setQuery(query); }} className="py-2 px-4 bg-[#1a1729] border border-white/50 hover:bg-violet-400/75 sm:w-[20%] cursor-pointer rounded-r-full" type="button" value="Search" />
        </form>
      </div>
      <div>
        {isLoading ? <span className="text-center text-2xl flex items-center justify-center h-[40vh]">Loading ! Please Wait...</span> : ''}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allCoins?.filter((coin) => (coin.name.toLowerCase().includes(query)))
            .map((coinf) => (
              <Link to="/coin" onClick={() => { dispatch(addCoin(coinf)); }} key={coinf.id}>
                <li className="flex items-center gap-2 py-2 px-4 bg-violet-900/20 m-2">
                  <img className="h-10" src={coinf.icon} alt={coinf.id} />
                  <h2 className="md:text-xl">{coinf.name}</h2>
                  <span className={coinf.priceChange1d < 0 ? 'text-red-400 ml-auto' : 'text-green-400 ml-auto'}>
                    {coinf.priceChange1d}
                    {' '}
                    <i className={coinf.priceChange1d < 0 ? 'fa-solid fa-arrow-trend-down' : 'fa-solid fa-arrow-trend-up'} />
                  </span>
                </li>
              </Link>
            ))}
        </ul>
        {' '}
        {!allCoins && isLoading === false ? (
          <div className="text-center text-2xl flex items-center justify-center h-[40vh] ">
            <span>
              <span className="changer">Oh Snap !</span>
              {' '}
              We have a problem...
            </span>
          </div>
        ) : ''}
      </div>

    </div>
  );
};

export default Home;
