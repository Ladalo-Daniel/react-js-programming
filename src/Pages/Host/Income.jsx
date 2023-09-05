import React from "react";

export default function Income() {
    const [test, setTest] = React.useState([]);

    React.useEffect(() => {
      fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=peas`)
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