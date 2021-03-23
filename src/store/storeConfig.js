import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "../../node_modules/redux";
import teamsReducer from "./reducers/teamsReducer";
import playersReducer from "./reducers/playersReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  teams: teamsReducer,
  players: playersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function storeConfig() {
  return createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
}

export default storeConfig;
