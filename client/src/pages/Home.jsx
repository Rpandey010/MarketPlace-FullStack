import React from 'react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Offer from '../components/Offer';
import NewsLetter from '../components/NewsLetter';
import NewCollections from '../components/NewCollections';

const Home = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </>
  );
};

export default Home;
