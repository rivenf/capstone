import React from 'react';
import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import BookingPage from './Components/BookingPage.js';
import Footer from './Components/Footer.js';
import './App.css';
import Logo from './images/Logo.svg';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <div className='headerInner'>
          <img src={Logo} className='navLogo' alt='Little Lemon logo'/>
          <Nav styleId='headerNav'/>
        </div>
      </header>
      <main className='main'>
        <Hero button='View Menu'/>
        <BookingPage />
      </main>
      <footer className='footer'>
        <Footer styleId='footNav'/>
      </footer>
    </div>
  );
}

export default App;
