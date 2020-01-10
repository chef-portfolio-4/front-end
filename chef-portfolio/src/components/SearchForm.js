import React, { useState, useEffect } from "react";
import axios from'axios';
import { Link } from'react-router-dom';
import RecipeCard from "./recipe/RecipeCard";
// import styled from'styled-components'


function SearchForm() {
 const [data, setData] = useState([]);
 const [query, setQuery] = useState('');

 useEffect(() => {
axios.get(`https://rickandmortyapi.com/api/character/`)
.then( res =>{
  const toons = res.data.results.filter(toon =>
    toon.name.toLowerCase().includes(query.toLowerCase())
);
setData(toons)
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
        <Link to = '/'><button>Home</button></Link>
      </form>
      {data.map((toon =>{
        return(
          <div>
          <CharacterCard key={toon.id} image={toon.image} name={toon.name} species={toon.species} status={toon.status}/>
          </div>
        )
      }))}
    </section>
  );
}
export default SearchForm
