import * as types from "./RecipeTypes";
const checkUser = () => {
  let userId = localStorage.getItem("userId");
  if (userId !== "") {
    return userId;
  } else {
    return (userId = "");
  }
};
const recipeInitialState = {
  user: { chef_id: checkUser() },
  recipes: [],
  recipe: {
    // name: "",
    // description: "",
    // meal_type: "",
    // time: "",
    // chef_id: localStorage.userId,
    // steps: "",
    // ingredients: ""
  },
  isLoading: false,
  error: null,
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

const recipeReducer = (state = recipeInitialState, action) => {
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
        isLoading: true
      };

    case types.GET_ALL_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false
      };

    case types.GET_ALL_FAILURE:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false
      };

    case types.GET_SINGLE_RECIPE:
      return {
        ...state,
        recipe: action.payload
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

    // case types.START_LOGOUT:
    //   return (state = undefined);

    default:
      // console.log(state, "state");
      return state;
  }
};

export default recipeReducer;
