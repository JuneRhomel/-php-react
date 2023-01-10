import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Admin() {

    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost/server/Admin.php")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data)

    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">fullname</th>
                        <th scope="col">email</th>
                        <th scope="col">number</th>
                        <th scope="col">checkIn</th>
                        <th scope="col">checkOut</th>
                        <th scope="col">booked_time</th>
                        <th scope="col">adults</th>
                        <th scope="col">children</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(data).map((item) => {
                        return (
                            <tr>
                                <th>{item.fullname}</th>
                                <th>{item.email}</th>
                                <th>{item.number}</th>
                                <th>{item.checkIn}</th>
                                <th>{item.checkOut}</th>
                                <th>{item.booked_time}</th>
                                <th>{item.adults}</th>
                                <th>{item.children}</th>

                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
