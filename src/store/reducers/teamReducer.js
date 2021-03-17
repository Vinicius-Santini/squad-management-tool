/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TEAMS,
} from "../actions/actionTypes";

const initialState = {
  teams: [],
  field: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      const enhancedActPayload = action.payload.teams.map((team) => {
        return { ...team};
      });
      return {
        ...state,
        teams: enhancedActPayload
      };
    default:
      return state;
  }
}
