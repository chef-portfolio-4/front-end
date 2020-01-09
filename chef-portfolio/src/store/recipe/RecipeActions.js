// Action Types
import axiosWithAuth from "../../utils/AxiosWithAuth";
import axios from "axios";
import {
  ADD_RECIPE,
  MODIFY_RECIPE,
  DELETE_RECIPE,
  GET_ALL_RECIPES,
  GET_SINGLE_RECIPE,
  GET_USER_RECIPES,
  SEARCH_RECIPES,
  GET_ALL_SUCCESS
} from "./RecipeTypes";

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE });
  axiosWithAuth()
    .post("/recipes/addRecipe", newRecipe)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};

export const modifyRecipe = (recipes, id) => dispatch => {
  dispatch({ type: MODIFY_RECIPE });
  axiosWithAuth()
    .put(`/recipes/${id}`)
    .then(res => {
      console.log(res.data);
    });
};

export const deleteRecipe = (recipes, id) => dispatch => {
  dispatch({ type: DELETE_RECIPE });
  axiosWithAuth()
    .delete(`/recipes/${id}`)
    .then(res => {
      console.log(res.data);
    });
};

export const getAllRecipes = () => dispatch => {
  dispatch({ type: GET_ALL_RECIPES });
  console.log("hello again");
  axios
    .get("https://chefportfolio2020.herokuapp.com/api/recipes")
    .then(res => {
      dispatch({ type: GET_ALL_SUCCESS, payload: res.data });
      console.log(res.data, "GET_ALL_RECIPES_SUCCESS res.data");
    })
    .catch(error => {
      throw error;
    });
};

export const getSingleRecipe = id => dispatch => {
  dispatch({ type: GET_SINGLE_RECIPE });
  axiosWithAuth()
    .get(`/recipes/${id}`)
    .then(res => {
      dispatch({
        type: GET_SINGLE_RECIPE,
        recipe: res.data
      });
    })
    .catch(error => {
      throw error;
    });
};

export const getUserRecipes = id => dispatch => {
  dispatch({ type: GET_USER_RECIPES });
  axiosWithAuth()
    .get(`/recipes/chef/${id}`)
    .then(res => {
      dispatch(getUserRecipes(res.data, id));
    })
    .catch(error => {
      throw error;
    });
};
