import React from "react";
import { useState, useEffect } from "react";

export default function TestingApi() {
    const [recipes, setRecipes] = React.useState([])

    React.useEffect(() => {
        fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
}


/*
export default [    
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg', title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)', id: '5ed6604591c37cdc054bcd09'}
1
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg', title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)', id: '5ed6604591c37cdc054bcc13'}
2
: 
{publisher: 'Simply Recipes', image_url: 'http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg', title: 'How to Grill Pizza', id: '5ed6604591c37cdc054bcb37'}
3
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/391236ba85.jpg', title: 'Veggie Pizza', id: '5ed6604591c37cdc054bca5d'}
4
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg', title: 'Pizza Dip', id: '5ed6604591c37cdc054bcac4'}
5
: 
{publisher: 'BBC Good Food', image_url: 'http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg', title: 'Pitta pizzas', id: '5ed6604591c37cdc054bc990'}
6
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/7988559586.jpg', title: 'Valentine Pizza', id: '5ed6604591c37cdc054bca57'}
7
: 
{publisher: 'A Spicy Perspective', image_url: 'http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg', title: 'Greek Pizza', id: '5ed6604591c37cdc054bca3b'}
8
: 
{publisher: 'My Baking Addiction', image_url: 'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg', title: 'Pizza Dip', id: '5ed6604591c37cdc054bca10'}
9
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/5100898cc5.jpg', title: 'Pizza Casserole', id: '5ed6604591c37cdc054bc96e'}
10
: 
{publisher: 'Simply Recipes', image_url: 'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg', title: 'Homemade Pizza', id: '5ed6604591c37cdc054bcb34'}
11
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/567c8fe.jpg', title: 'Pizza Pinwheels', id: '5ed6604591c37cdc054bc971'}
12
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/636003da23.jpg', title: 'Hummus Pizza', id: '5ed6604591c37cdc054bc8fd'}
13
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/104254d419.jpg', title: 'Pesto Pizza', id: '5ed6604591c37cdc054bc958'}
14
: 
{publisher: "What's Gaby Cooking", image_url: 'http://forkify-api.herokuapp.com/images/PizzaMonkeyBread67f8.jpg', title: 'Pizza Monkey Bread', id: '5ed6604691c37cdc054bd0bc'}
15
: 
{publisher: 'BBC Good Food', image_url: 'http://forkify-api.herokuapp.com/images/679637_MEDIUM765c.jpg', title: 'Puff pizza tart', id: '5ed6604691c37cdc054bd0c0'}
16
: 
{publisher: 'Epicurious', image_url: 'http://forkify-api.herokuapp.com/images/51150600f4cb.jpg', title: 'Veggi-Prosciutto Pizza', id: '5ed6604591c37cdc054bcfb2'}
17
: 
{publisher: 'My Baking Addiction', image_url: 'http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg', title: 'Barbecue Chicken Pizza', id: '5ed6604591c37cdc054bcfcc'}
18
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg', title: 'Pizza Potato Skins', id: '5ed6604591c37cdc054bcebc'}
19
: 
{publisher: 'Two Peas and Their Pod', image_url: 'http://forkify-api.herokuapp.com/images/minifruitpizzas52c00.jpg', title: 'Mini Fruit Pizzas', id: '5ed6604591c37cdc054bce0d'}
20
: 
{publisher: 'Bon Appetit', image_url: 'http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg', title: 'No-Knead Pizza Dough', id: '5ed6604591c37cdc054bcd86'}
21
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg', title: 'Grilled Veggie Pizza', id: '5ed6604591c37cdc054bcc7e'}
22
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/4797377235_c07589b7d4_be953.jpg', title: 'Mexican “Flatbread” Pizza', id: '5ed6604591c37cdc054bccb2'}
23
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg', title: 'Pepperoni Pizza Burgers', id: '5ed6604591c37cdc054bcc40'}
24
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/580542e3ec.jpg', title: 'Hot Pizza Dip', id: '5ed6604591c37cdc054bc8f7'}
25
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/burger53be.jpg', title: 'Supreme Pizza Burgers', id: '5ed6604591c37cdc054bcc3e'}
26
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg', title: 'Taco Quesadilla Pizzas', id: '5ed6604591c37cdc054bcae1'}
27
: 
{publisher: 'Chow', image_url: 'http://forkify-api.herokuapp.com/images/30624_RecipeImage_620x413_pepperoni_pizza_dip_4774d.jpg', title: 'Pepperoni Pizza Dip Recipe', id: '5ed6604691c37cdc054bd034'}
28
: 
{publisher: "What's Gaby Cooking", image_url: 'http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg', title: 'Grilled BBQ Chicken Pizza', id: '5ed6604691c37cdc054bd015'}
29
: 
{publisher: "Lisa's Kitchen", image_url: 'http://forkify-api.herokuapp.com/images/hummus_pizza25f37.jpg', title: 'Homemade Spicy Hummus Pizza', id: '5ed6604691c37cdc054bd0d4'}
30
: 
{publisher: 'My Baking Addiction', image_url: 'http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg', title: 'Simple No Knead Pizza Dough', id: '5ed6604691c37cdc054bd07c'}
31
: 
{publisher: "What's Gaby Cooking", image_url: 'http://forkify-api.herokuapp.com/images/PizzaHandPie4e08.jpg', title: 'Pepperoni Pizza Hand Pies', id: '5ed6604691c37cdc054bd016'}
32
: 
{publisher: 'BBC Good Food', image_url: 'http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg', title: 'Pizza bianco with artichoke hearts', id: '5ed6604591c37cdc054bcf7e'}
33
: 
{publisher: 'Whats Gaby Cooking', image_url: 'http://forkify-api.herokuapp.com/images/IMG_98428b96.jpg', title: 'Loaded Veggie and Prosciutto Pizza', id: '5ed6604591c37cdc054bcf8d'}
34
: 
{publisher: 'Vintage Mixer', image_url: 'http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg', title: 'Cauliflower Pizza Crust Recipe', id: '5ed6604591c37cdc054bcf09'}
35
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg', title: 'Deep Dish Fruit Pizza', id: '5ed6604591c37cdc054bcc5b'}
36
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg', title: 'PW’s Favorite Pizza', id: '5ed6604591c37cdc054bccbd'}
37
: 
{publisher: '101 Cookbooks', image_url: 'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg', title: 'Best Pizza Dough Ever', id: '5ed6604591c37cdc054bcd07'}
38
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg', title: 'One Basic Pizza Crust', id: '5ed6604591c37cdc054bcc76'}
39
: 
{publisher: 'BBC Good Food', image_url: 'http://forkify-api.herokuapp.com/images/1813674_MEDIUM6f4a.jpg', title: 'Salami &amp; peppadew pizza', id: '5ed6604591c37cdc054bcb6e'}
40
: 
{publisher: 'Real Simple', image_url: 'http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg', title: 'English-Muffin Egg Pizzas', id: '5ed6604591c37cdc054bcbc1'}
41
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg', title: 'Fig-Prosciutto Pizza with Arugula', id: '5ed6604591c37cdc054bcc72'}
42
: 
{publisher: 'Real Simple', image_url: 'http://forkify-api.herokuapp.com/images/pizza_30061a5d763.jpg', title: 'Salami and Brussels Sprouts Pizza', id: '5ed6604591c37cdc054bcc08'}
43
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Pizza2BQue…2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg', title: 'Pizza Quesadillas (aka Pizzadillas)', id: '5ed6604591c37cdc054bcac5'}
44
: 
{publisher: "What's Gaby Cooking", image_url: 'http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg', title: 'Pepperoni Pizza Monkey Bread', id: '5ed6604591c37cdc054bca36'}
45
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/191121d99d.jpg', title: 'Fast English Muffin Pizzas', id: '5ed6604591c37cdc054bc8b7'}
46
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/100111309d9.jpg', title: 'Double Crust Stuffed Pizza', id: '5ed6604591c37cdc054bc89a'}
47
: 
{publisher: 'Two Peas and Their Pod', image_url: 'http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg', title: 'Peach, Basil, Mozzarella, & Balsamic Pizza', id: '5ed6604591c37cdc054bce32'}
48
: 
{publisher: 'Two Peas and Their Pod', image_url: 'http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg', title: 'Avocado Pita Pizza with Cilantro Sauce', id: '5ed6604591c37cdc054bce0f'}
49
: 
{publisher: 'Bon Appetit', image_url: 'http://forkify-api.herokuapp.com/images/figandgoatcheesepizzawitharugula646698d.jpg', title: 'Fig and Goat Cheese Pizza with Arugula', id: '5ed6604591c37cdc054bcd81'}
50
: 
{publisher: 'The Pioneer Woman', image_url: 'http://forkify-api.herokuapp.com/images/4433733640_8b0a5d19fbace0.jpg', title: 'CPK’s BBQ Chicken Pizza', id: '5ed6604591c37cdc054bccbc'}
51
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Avocado2Ba…ied2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg', title: 'Avocado Breakfast Pizza with Fried Egg', id: '5ed6604591c37cdc054bca79'}
52
: 
{publisher: 'All Recipes', image_url: 'http://forkify-api.herokuapp.com/images/237891b5e4.jpg', title: 'Jay’s Signature Pizza Crust', id: '5ed6604591c37cdc054bc90b'}
53
: 
{publisher: 'My Baking Addiction', image_url: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg', title: 'Spicy Chicken and Pepper Jack Pizza', id: '5ed6604591c37cdc054bc886'}
54
: 
{publisher: 'Real Simple', image_url: 'http://forkify-api.herokuapp.com/images/20meals14_30007e78232.jpg', title: 'Artichoke Pizzas With Lemony Green Bean Salad', id: '5ed6604591c37cdc054bcba5'}
55
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Thai2BChic…Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg', title: 'Thai Chicken Pizza with Sweet Chili Sauce', id: '5ed6604591c37cdc054bcae5'}
56
: 
{publisher: 'Two Peas and Their Pod', image_url: 'http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg', title: 'Sweet Potato Kale Pizza with Rosemary & Red Onion', id: '5ed6604591c37cdc054bce26'}
57
: 
{publisher: 'Closet Cooking', image_url: 'http://forkify-api.herokuapp.com/images/Strawberry…BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg', title: 'Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon', id: '5ed6604591c37cdc054bca85'}
58
: 
{publisher: 'Jamie Oliver', image_url: 'http://forkify-api.herokuapp.com/images/395_1_1350903959_lrgdd8a.jpg', title: 'Egg, prosciutto, artichokes, olives, mozzarella, tomato sauce &amp; basil pizza topping', id: '5ed6604591c37cdc054bcf3a'}
length
: 
59
]



*/