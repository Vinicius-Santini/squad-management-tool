/* eslint-disable import/no-anonymous-default-export */
import { GET_PLAYERS} from "../actions/actionTypes";

const initialState = { players: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      const enhancedActPayload = action.payload.players.map((player) => {
          return {...player};
      });
      return {
        ...state,
        players: enhancedActPayload,
      };
    default:
      return state;
  }
}
