import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <>
            <ul className={props.styleId}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/'>Reservations</Link></li>
                <li><Link to='/'>Order Online</Link></li>
                <li><Link to='/'>Login</Link></li>
            </ul>
        </>
    )
}