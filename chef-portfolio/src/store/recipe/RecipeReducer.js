import * as types from "./RecipeTypes";

const recipeInitialState = {
  recipes: [
    {
      recipeName: "Pork & Beans",
      id: 1,
      mealType: "lunch",
      img: ""
    }
  ],
  newRecipe: {
    recipeName: "",
    recipeImage: "",
    recipeType: "",
    ingredients: "",
    instructions: ""
  },
  isEditing: false
};

export const recipeReducer = (state = recipeInitialState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return {
        ...state,
        newRecipe: action.payload,
        recipes: [...state.recipes, state.newRecipe]
      };

    case types.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => {
          return recipe.id !== action.payload;
        })
      };

    default:
      return state;
  }
};