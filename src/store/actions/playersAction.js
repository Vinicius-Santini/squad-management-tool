import { GET_PLAYERS, GET_PLAYERS_URL, SEARCH_PLAYERS } from "./actionTypes";
import Service from "../../api/apiService";

export const getPlayers = () => async (dispatch) => {
  const url = GET_PLAYERS_URL;

  return dispatch({
    type: GET_PLAYERS,
    payload: await Service({
      method: "get",
      url,
    }),
  });
};

export const getMatchedPlayers = (matched) => (dispatch) => {
  return dispatch({
    type: SEARCH_PLAYERS,
    payload: matched,
  });
};
