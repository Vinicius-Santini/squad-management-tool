/* eslint-disable import/no-anonymous-default-export */
import { GET_PLAYERS, SEARCH_PLAYERS} from "../actions/actionTypes";

const initialState = { players: [],
  matchedPlayers: []
 };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
        
      return {
        ...state,
        players: action.payload.players,
      };

      case SEARCH_PLAYERS:
        return {
          ...state,
          matchedPlayers: action.payload
        }

    default:
      return state;
  }
}
