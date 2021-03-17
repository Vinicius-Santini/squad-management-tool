import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "../../node_modules/redux";
import teamReducer from "./reducers/teamReducer";
import playersReducer from "./reducers/playersReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  teams: teamReducer,
  players: playersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function storeConfig() {
  return createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
}

export default storeConfig;
