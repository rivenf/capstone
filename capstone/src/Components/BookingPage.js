import React from 'react';
import '../App.css';
import BookingForm from './BookingForm.js'

export default function BookingPage() {
    return (
        <div className='innerContainer bookingPage'>
            <h1>Reserve a table</h1>
            <BookingForm />
        </div>
    )
}