import React, { useState, useEffect } from 'react';
//import Server from '../../Server';
import { Link } from "react-router-dom";

//import { useParams } from 'react-router-dom';


export default function RecipeList() {
  const [recipes, setRecipes] = React.useState([])
   
   React.useEffect(() => {
    const url = "https://forkify-api.herokuapp.com/api/v2/recipes?search=tomato"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setRecipes(data.data.recipes)
    })
   }, [])
   console.log(recipes)

   //const spread = [...recipes, hostId= "123"]
   //console.log(spread)
   const recipeElements = recipes.map(recipe=> {
    return(
      <div key={recipe.id} className='host-vans'>
         <img src={recipe.image_url} />
         <div className='text'>
          <h2>{recipe.title}</h2>
          <h5>{recipe.publisher}</h5>
         </div>
      </div>
    )
   })

  return(
    <div className='recipe-elements'>
     {recipeElements}
    </div>
  )
}



/*


 React.useEffect(()=> {
    const fecthedRecipes = async() => {
      const url = "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
      try{
         const response = await fetch(url);
         const data = await response.json();
         setRecipes(data.data.data)

         console.log(recipes)
      } catch(error){
          console.log("Error:", error)
      }
    }
    fecthedRecipes()
  }, [])


export default function HostVans({ hostId }) {
  const filteredVans = Server.filter((van) => van.hostId === hostId);

  const hostVansElements = filteredVans.map((van) => (
    <div key={van.id}>
      <img src={van.imageUrl} alt={van.name} />
      <h3>{van.name}</h3>
      <p>{van.price}</p>
    </div>
  ));

  return (
    <div>
      <marquee behavior="" direction=""><h1>This page is not available at the moment........</h1></marquee>
      {hostVansElements}
    </div>
  );
}




/*
export default function HostVans() {
  const [vans, setVans] = React.useState([])
  const { hostId } = useParams()
  
  React.useEffect( () => {
    const vanHost = Server.filter( (van) => van.hostId === hostId )
    setVans(vanHost)
    console.log(vanHost)
  }, [hostId])


  const hostVansElements = vans.map(
    (van) => (
      <div key={van.id}>
        <img src={van.imageUrl} />
        <h3>{van.name}</h3>
        <p>{van.price}</p>
      </div>
    )
  )

  return (
    <div>
       <h1>Hello</h1>
       {hostVansElements}
    </div>
  );


};



/*


       Render the filtered elements 
      {vans.map((van) => (
        <div key={vans.id}>
          <h3>{vans.name}</h3>
          <p>{vans.description}</p>
          }
        </div>


       const [filteredData, setFilteredData] = useState(Server);
  const { Id } = useParams()

  useEffect(() => {
    const filteredItems = filteredData.filter(item => item.Id === Id);
    setFilteredData(filteredItems);
  }, [Id]);

  return (
    <div>
      <h1>Host Van Listing</h1>
    </div>
  );


      {filteredData.map(item => (
        <div key={item.hostId}>
          <img src={item.imageUrl} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
        </div>
      ))}
*/