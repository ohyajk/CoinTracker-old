import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { fetchData } from './Redux/Coins/CoinSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
