import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.coins.selectedCoin);

  return (
    <div className="flex flex-col gap-2 justify-start items-center mt-10">
      <img className="h-20" src={details.icon} alt={details.name} />
      <h2>
        Name :
        {details.name}
      </h2>
      <h4>
        Rank :
        {details.rank}
      </h4>
      <h4>
        Total Supply :
        {details.totalSupply}
      </h4>
      <h4>
        Available Supply :
        {details.availableSupply}
      </h4>
      <h4>
        Price :
        {details.price}
      </h4>
      <h4>
        Price Change Weekly :
        {details.priceChange1w < 0 ? <span className="text-red-400">{details.priceChange1w}</span> : <span className="text-green-400">{details.priceChange1w}</span>}
      </h4>
      <h4>
        Price Change Daily :
        {details.priceChange1d < 0 ? <span className="text-red-400">{details.priceChange1d}</span> : <span className="text-green-400">{details.priceChange1d}</span>}
      </h4>
      <h4>
        Price Change Hourly :
        {details.priceChange1h < 0 ? <span className="text-red-400">{details.priceChange1h}</span> : <span className="text-green-400">{details.priceChange1h}</span>}
      </h4>
    </div>
  );
};

export default Details;
