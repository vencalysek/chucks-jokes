import {combineReducers} from "redux";
import jokesReducer from "./jokes/jokes.reducer";

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export default rootReducer;
