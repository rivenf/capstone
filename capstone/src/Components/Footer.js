import React from 'react';
import Nav from './Nav.js';
import '../App.css';
import Logo from '../images/Logo.svg';

export default function Footer(props) {
    return (
        <div className='innerContainer'>
            <img src={Logo} className='footLogo' alt='Little Lemon logo' />
            <Nav styleId='footNav'/>
            <ul className={props.styleId}>
                <li><h3>Social Media</h3></li>
                <li><a href='http://www.facebook.com'>Facebook</a></li>
                <li><a href='http://www.instagram.com'>Instagram</a></li>
                <li><a href='http://www.twitter.com'>Twitter</a></li>
            </ul>
            <ul className={props.styleId}>
                <li><h3>Contact</h3></li>
                <li>address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
        </div>
    )
}