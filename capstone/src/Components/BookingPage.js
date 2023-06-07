import React from 'react';
import '../App.css';
import BookingForm from './BookingForm.js'
import Restaurant from '../images/restaurant.jpg'

export default function BookingPage() {
    return (
        <div className='innerContainer bookingPage'>
            <BookingForm />
            <img src={Restaurant} alt='Restaurant seating' className='pageImg' />
        </div>
    )
}