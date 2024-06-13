import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Recommendations from '../components/Recommendations';
import Hampers from '../components/Hampers';
import Discount from '../components/Discount';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import ProductList from '../components/ProductList';

function Beranda() {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Hero />
        <ProductList />
        <Hampers />
        <Discount />
        <Advantages />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Beranda;
