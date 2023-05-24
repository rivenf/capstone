import React from 'react';
import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import Form from './Components/Form.js';
import Footer from './Components/Footer.js';
import './App.css';
import Logo from './images/Logo.svg';

function App() {
  return (
    <>
      <header className='header'>
        <img src={Logo} className='navLogo' alt='Little Lemon logo'/>
        <Nav style='headerNav'/>
      </header>
      <main className='main'>
        <Hero button='View Menu'/>
        <Form />
      </main>
      <footer className='footer'>
        <Footer style='footNav'/>
      </footer>
    </>
  );
}

export default App;
