import * as types from "./RecipeTypes";

const recipeInitialState = {
  user: {chef_id: ""},
  recipes: [
    {
      recipeName: "Pork & Beans",
      id: 1,
      // recipeImage: "",
      recipeType: "lunch",
      ingredients: "",
      instructions: "",
      chef_id: 1
    },
    {
      recipeName: "Rosemary Brown Sugar Bacon",
      id: 2,
      // recipeImage: "",
      recipeType: "breakfast",
      ingredients: "",
      instructions: "",
      chef_id:2
    }
  ],
  newRecipe: {
    recipeName: "",
    id: "",
    // recipeImage: "",
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

    case types.MODIFY_RECIPE:
      return {
        ...state,
        recipe: action.payload
        // recipes: [...state.recipes, state.newRecipe]
      };

    case types.GET_ALL_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes]
      };

    case types.GET_SINGLE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes]
      };

    case types.GET_USER_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes]
      };

    case types.SEARCH_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes]
      };

    default:
      // console.log(state, "state");
      return state;
  }
};
