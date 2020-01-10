import { useDispatch } from "react-redux";
import { logout } from "../store/recipe/RecipeActions";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
};

export default Logout;
