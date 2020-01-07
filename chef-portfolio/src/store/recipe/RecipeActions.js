// Action Types
import { DELETE_RECIPE } from "./RecipeTypes";

export const deleteRecipe = recipeId => {
  return { type: DELETE_RECIPE, payload: recipeId };
};
