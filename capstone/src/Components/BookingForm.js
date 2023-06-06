import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';

export default function BookingForm() {

    const formik = useFormik({
        initialValues: {
          date: '',
          time: '',
          guests: '',
          occasion: '',
          comment: '',
        },
        validationSchema: Yup.object({
            date: Yup.date().required('Please enter a valid date'),
            guests: Yup.number().required('Number of guests must be between 1 and 10').min(1).max(10),
            comment: Yup.string(),
          }),
        onSubmit: values => {
          console.log(values);
        },
      });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    name="date"
                    id="res-date"
                    {...formik.getFieldProps('date')}
                />
                {formik.touched.date && formik.errors.date ?
                    (<div>{formik.errors.date}</div>) : null}

                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    name="time"
                    {...formik.getFieldProps('time')}
                >
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    {...formik.getFieldProps('guests')}
                />
                {formik.touched.guests && formik.errors.guests ?
                    (<div>{formik.errors.guests}</div>) : null}

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    {...formik.getFieldProps('occasion')}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>

                <label htmlFor="comment">Additional comments</label>
                <input
                    type="text"
                    id="comment"
                    name="comment"
                    {...formik.getFieldProps('comment')}
                />

                <button type='submit'>Make a Reservation</button>
            </form>
        </>
    )
}