import React, { useState, useEffect } from "react";
import axios from'axios';
import { Link } from'react-router-dom';
// import RecipeCard from'./RecipeCard';
import styled from'styled-components'
import SearchCard from "./SearchCard";


function SearchForm() {
 const [recipes, setRecipes] = useState([]);
 const [query, setQuery] = useState('');

 useEffect(() => {
axios.get("https://chefportfolio2020.herokuapp.com/api/recipes/")
.then( res =>{
    console.log(res,"from searchform")
  const recipes = res.data.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
);
setRecipes(recipes)
 })
 },[query]);

 const handleInputChange = e =>{
    setQuery(e.target.value);
 };

 return (
     
    <section className="search-form">
      <form>
        <input
        type='text'
        name='name'
        id='name'
        placeholder='Search'
        onChange={handleInputChange}
        />
        <Link to = '/homepage'><button>Home</button></Link>
      </form>
      {recipes.map((recipe =>{
        return(
          <div>
  <SearchCard key={recipe.id} recipe={recipe}/>
          </div>
        )
      }))}
    </section>
  );
}
export default SearchForm
