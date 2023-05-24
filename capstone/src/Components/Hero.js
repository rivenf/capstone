import React from 'react';
import '../App.css';
import MarioAdrianA from '../images/MarioAdrianA.jpg';

export default function Hero(props) {
    return (
        <section className='hero'>
            <section className='heroText'>
                <h1>The Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to the Little Lemon restaurant, your local Mediterranean Restaurant. We are a family owned restaurant, focused on traditional recipies served with a modern twist.</p>
                <button className='button'>{props.button}</button>
            </section>
            <img src={MarioAdrianA} alt='Mario and Adrian' className='heroImg' />
        </section>
    )
}