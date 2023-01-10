
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";

export default function Room(props) {
    const { id } = useParams()

    return (
        <div>

            <div>
                <h1>{props[id].room_type}</h1>
                <p>${props[id].rate}</p>
                <p>{props[id].description}</p>
                <img src={props[id].image} alt="" />
                <button>Book Now</button>
            </div>



            <div>
                <input type="text" readOnly value={props[id].room_type} />
            </div>
        </div>
    )
}

