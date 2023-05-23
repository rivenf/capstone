import React from 'react';
import '../App.css';
import MarioAdrianA from '../images/MarioAdrianA.jpg';

export default function Hero() {
    return (
        <section className='hero'>
            <section className='heroText'>
                <h1>The Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Welcome to the Little Lemon restaurant in Chicago, your local Mediterranean Restaurant.</p>
            </section>
            <img src={MarioAdrianA} alt='Mario and Adrian' className='heroImg' />
        </section>
    )
}