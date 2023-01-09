
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios
            .get("http://localhost/server/room.php")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data)

    let room;
    if(data){
        room= data.map((item)=> {
            return(
                <div key={item.id}>
                <h1>{item.room_type}</h1>
                <img src={item.image} alt="" />
                <p>{item.description}</p>
                <p>{item.amenites}</p>
                </div>
            )
        })
    } else{
        <p>None</p>
    }


    return (
        <div>
            {room}
        </div>
    )
}
