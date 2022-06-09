import React from 'react';
import Header from './Rentolic/Header';
import Navbar from './Rentolic/Navbar';
import SlideImg from './Rentolic/SlideImg';
import CardData from './Rentolic/CardData';
import { Routes, Route } from 'react-router-dom';
import Entertainment from './Rentolic/Entertainment';
import Automobiles from './Rentolic/Automobiles';
import Electronics from './Rentolic/Electronics';
import Applications from './Rentolic/Applications';
import Furniture from './Rentolic/Furniture';
import FeedbackSection from './Rentolic/FeedbackSection';
import Footer from './Rentolic/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <SlideImg />
      <CardData />
      <Routes>
        <Route path="/" element={<Automobiles />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/Furniture" element={<Furniture />} />
      </Routes>
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default App;


