import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    store.dispatch({ type: "SET_POKEMON", pokemons: data.results });
  });

export default store;
