
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

export default function List(props) {
    
    return (
        <div>
            {
                Object.values(props).map((item) => {
                    return (
                        <div key={item.room_id}>
                            <img src={item.image} alt="" />
                            
                            <h1>{item.room_type}</h1>
                            <p>{item.description}</p>
                            <p>{item.rate}</p>
                            {item.amenites.map((i) => {
                                return (
                                    <ul>
                                    <li>{i.amenites_0}</li>
                                    <li>{i.amenites_1}</li>
                                    <li>{i.amenites_2}</li>
                                    <li>{i.amenites_3}</li>
                                    <li>{i.amenites_4}</li>
                                    <li>{i.amenites_5}</li>
                                    
                                    </ul>
                                    
                                )
                            })}
                            <Link to={`/list/${item.room_id}`}>Reserve</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
