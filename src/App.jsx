import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Product />
      <About />
      <Footer />
      
    </div>
  )
}

export default App
