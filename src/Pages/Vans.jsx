import React from "react";
import { Link } from "react-router-dom";
import Server from "../Server";
//import { useState, useEffect } from "react";


export default function Vans() {
    const [vans, setVans] = React.useState(Server)

    const vanElements = vans.map(van => {
        return(
            <div key={van.id} className="van-tile">
               <Link to={`/vans/${van.id}`}>
               <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>N{van.price} <span>/day</span></p>
                </div>
                <p>{van.type}</p>
               </Link>
               <Link className="button"  to={`/vans/{van.id}`} >Van Details</Link>
            </div>
        )
    })

    return(
        <div className="van-elements">
            {vanElements}
        </div>
    )
}
/*

   





    const [vans, setVans] = React.useState([])
    React.useEffect( ()=> {
        fetch("/api/vans")
         .then(res => res.json())
         .then(data => setVans(data.vans))
        }, [])

     const vanElement = vans.map( van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={'van-type ${van.type} selected'}>{van.type}</i>
        </div>
     ))

     
     return(
        <div className="van-list-container">
            <h1>Explore our vans options</h1>
            <div className="van-list">
                {vanElement}
            </div>
        </div>
    )
*/    

