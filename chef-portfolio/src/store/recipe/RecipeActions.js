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
  // LOGOUT
} from "./RecipeTypes";
import { bindActionCreators } from "redux";

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE });
  axiosWithAuth()
    .post("/recipes/", newRecipe)
    .then(res => {
      console.log(res.data, "add recipe response");
    })
    .catch(err => console.log(err.res));
};

export const modifyRecipe = (id, input) => dispatch => {
  dispatch({ type: MODIFY_RECIPE });
  axiosWithAuth()
    .put(`/recipes/${id}`, input)
    .then(res => {
      axios
        .get("https://chefportfolio2020.herokuapp.com/api/recipes")
        .then(res => {
          dispatch({ type: GET_ALL_SUCCESS, payload: res.data });
          console.log(res.data, "GET_ALL_RECIPES_SUCCESS res.data");
        });
    });
};

export const deleteRecipe = id => dispatch => {
  dispatch({ type: DELETE_RECIPE });
  axiosWithAuth()
    .delete(`/recipes/${id}`)
    .then(res => {
      axios
        .get("https://chefportfolio2020.herokuapp.com/api/recipes")
        .then(res => {
          dispatch({ type: GET_ALL_SUCCESS, payload: res.data });
          console.log(res.data, "GET_ALL_RECIPES_SUCCESS res.data");
        });
    });
};

export const getAllRecipes = () => dispatch => {
  dispatch({ type: GET_ALL_RECIPES });
  // console.log("hello again");
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
  // dispatch({ type: GET_SINGLE_RECIPE });
  axiosWithAuth()
    .get(`/recipes/${id}`)
    .then(res => {
      console.log(res.data, "GET_SINGLE_RECIPE res.data");
      dispatch({
        type: GET_SINGLE_RECIPE,
        payload: res.data
      });
    })
    .catch(error => {
      throw error;
    });
};

// export const getRecipeToEdit = (id, history) => dispatch => {
//   axiosWithAuth()
//     .get(`/recipes/${id}`)
//     .then(res => {
//       console.log(res.data, "GET_RECIPE_TO_EDIT res.data");
//       dispatch({
//         type: GET_SINGLE_RECIPE,
//         payload: res.data
//       });
//       history.push(`/editrecipeform/${id}`);
//     })
//     .catch(error => {
//       throw error;
//     });
// };

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

// export const logout = () => dispatch => {
//   dispatch({ type: START_LOGOUT });
// };
// /LOGOUT USERexport const logoutUser = () => dispatch => {  dispatch({ type: START_LOGOUT });      localStorage.removeItem("token");      dispatch({ type: LOGOUT_SUCCESS });      history.push('/')};
