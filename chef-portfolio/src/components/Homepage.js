import React from "react";
import RecipesList from "./recipe/RecipesList";

const Homepage = () => {
  return (

    <div>
      <img src="https://images.unsplash.com/flagged/photo-1561350117-501b4661f8d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="chef cooking"></img>
      
      <RecipesList />
    </div>
  );
};

export default Homepage;
