import React from "react";
import { useState, useEffect } from "react";

export default function Reviews() {
    const [test, setTest] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`)
      .then(res => res.json())
      .then(data => {
        setTest(data.data.recipes);
      });
  }, []);
  //const results = test.recipes
  console.log(test)

 const testElements =  test.map((tes) => {
      return(
        <div key={tes.id} className="pizza">
          <img src={tes.image_url} />
          <div className="pizza-info">
          <h2>{tes.title}</h2>
          <h5>{tes.publisher}</h5>
          </div>
          <p>{tes.servings}</p>
          <p>{tes.cooking_time}</p>
        </div>
      )
  })

  return(
    <div className="test-elements">
      {testElements}
    </div>
  )
}


/*
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
      
      /5ed6604591c37cdc054bc886
      https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
      
     {publisher: 'My Baking Addiction', ingredients: Array(7), source_url: 'http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/', image_url: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg', title: 'Spicy Chicken and Pepper Jack Pizza', …}




     {publisher: 'My Baking Addiction', ingredients: Array(7), source_url: 'http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/', image_url: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg', title: 'Spicy Chicken and Pepper Jack Pizza', …}
cooking_time
: 
45
id
: 
"5ed6604591c37cdc054bc886"
image_url
: 
"http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
ingredients
: 
Array(7)
0
: 
{quantity: 1, unit: '', description: 'tbsp. canola or olive oil'}
1
: 
{quantity: 0.5, unit: 'cup', description: 'chopped sweet onion'}
2
: 
{quantity: 3, unit: 'cups', description: 'diced fresh red yellow and green bell peppers'}
3
: 
{quantity: 1, unit: '', description: 'tube refrigerated pizza dough'}
4
: 
{quantity: 0.5, unit: 'cup', description: 'salsa'}
5
: 
{quantity: 2, unit: 'cups', description: 'sargento chefstyle shredded pepper jack cheese'}
6
: 
{quantity: null, unit: '', description: 'Chopped cilantro or dried oregano'}
length
: 
7
[[Prototype]]
: 
Array(0)
publisher
: 
"My Baking Addiction"
servings
: 
4
source_url
: 
"http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
title
: 
"Spicy Chicken and Pepper Jack Pizza"
*/