import React from 'react';
import Nav from './Nav.js'
import '../App.css';

export default function Footer() {
    return (
        <>
            <img src='' className='footLogo' alt='Little Lemon logo' />
            <Nav />
            <ul>
                <li><h3>Social Media</h3></li>
                <li><a href='http://www.facebook.com'>Facebook</a></li>
                <li><a href='http://www.instagram.com'>Instagram</a></li>
                <li><a href='http://www.twitter.com'>Twitter</a></li>
            </ul>
            <ul>
                <li><h3>Contact</h3></li>
                <li>address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </>
    )
}