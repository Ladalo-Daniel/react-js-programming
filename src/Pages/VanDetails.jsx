import React from "react";
import Server from "../Server";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function VanDetails(){
    const [vanDetails, setVanDetails] = React.useState(Server)
    const [isLoading, setIsLoading] = React.useState(true);
    const { id } = useParams();

   React.useEffect(() => {
        const van = vanDetails.find( (van) => van.id === id)
        setVanDetails(van)
        setIsLoading(false);
    }, [id])
     
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    if(!setVanDetails) {
        return <p>No van marched</p>
    }

    return (
        <div className="container">
          {vanDetails ? (
            <div className="van-details-container">
              <img src={vanDetails.imageUrl} />
              <h2>{vanDetails.name}</h2>
              <p>Price: ${vanDetails.price}</p>
              <p>{vanDetails.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      );
      
}




/*
const VanDetails = ({ id }) => {
    const van = vans.find((van) => van.id === id);
  
    if (!van) {
      return <p>Van not found.</p>;
    }
  
    return (
      <div>
        <h2>{van.name}</h2>
        <p>Price: ${van.price}</p>
        <p>{van.description}</p>
        <img src={van.imageUrl} alt={van.name} />
      </div>
    );
  };

  export default VanDetails;
  
  
  
  
  
  
  


/*
export default function VanDetails(){
    const [vans, setVans] = React.useState(Server)
    const params = useParams();
    console.log(params)

    React.useEffect(() => {}, [])

    const vanElements = vans.map(van => {
       return <h1>Hey</h1>
        
    })

    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
}

*/