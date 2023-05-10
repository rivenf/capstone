import React from 'react';
import Nav from './Components/Nav.js'
import Hero from './Components/Hero.js'
import Form from './Components/Form.js'
import Footer from './Components/Footer.js'
import './App.css';

function App() {
  return (
    <>
      <header className='container'>
        <Nav />
      </header>
      <main className='container'>
        <Hero />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
