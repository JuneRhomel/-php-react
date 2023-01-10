import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [adults, setadults] = useState('')
    const [children, setchildren] = useState('')
    const [checkIn, setcheckIn] = useState('')
    const [checkOut, setcheckOut] = useState('')


    const handelSubmit = () => {
        if (fullname.length === 0) {
            alert('No name')
        } else if (number.length === 0) {
            alert('No mobile')
        } else if (email.length === 0) {
            alert('No email')
        } else {
            const url = "http://localhost/server/guestForm.php";

            let fData = new FormData();
            fData.append('fullname',fullname);
            fData.append('email',email);
            fData.append('number',number);
            fData.append('adults',adults);
            fData.append('children',children);
            fData.append('checkIn',checkIn);
            fData.append('checkOut',checkOut);

            axios.post(url, fData)
            .then(response => alert(response.data))
            .catch(error=>alert(error));
        }
    }

    return (
        <>
            <div className='form-data'>
                <label htmlFor="Name">fullname</label>
                <input type="text" name="fullname" id="" onChange={(e) => setfullname(e.target.value)} /> <br />

                <label htmlFor="Email">Email</label>
                <input type="text" name='email' onChange={(e) => setemail(e.target.value)} /> <br />
                

                <label htmlFor="number">number</label>
                <input type="text" name='number' onChange={(e) => setnumber(e.target.value)} /> <br />

                <label htmlFor="Adults">Adults</label>
                <input type="text" name="adults" id="" onChange={(e) => setadults(e.target.value)} /> <br />

                <label htmlFor="Children">Children</label>
                <input type="text" name="children" id="" onChange={(e) => setchildren(e.target.value)} />

                <label htmlFor="Check-in-Date">Check-in-Date</label>
                <input type="date" name="checkIn" id="" onChange={(e) => setcheckIn(e.target.value)} />

                <label htmlFor="Children">Check-out-Date</label>
                <input type="date" name="checkOut" id="" onChange={(e) => setcheckOut(e.target.value)} />

                <input type="button" name='send' value="send" onClick={handelSubmit} />
            </div>
        </>
    )

}
