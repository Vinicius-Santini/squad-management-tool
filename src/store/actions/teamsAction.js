import {
  GET_TEAMS,
  GET_TEAMS_URL,
  POST_TEAM,
  POST_TEAM_URL,
  UPDATE_TEAM,
  UPDATE_TEAM_URL,
  DELETE_TEAM,
  DELETE_TEAM_URL
} from "./actionTypes";
import Service from "../../api/apiService";

export const getTeams = () => async (
  dispatch
) => {
  const url = GET_TEAMS_URL;
  return dispatch({
    type: GET_TEAMS,
    payload: await Service({
      method: "get",
      url,
    }),
  });
};

export const postTeam = () => async (
  dispatch
) => {
  const url = POST_TEAM_URL;
  return dispatch({
    type: POST_TEAM,
    payload: await Service({
      method: "post",
      url,
    }),
  });
};

export const putTeam = () => async (
  dispatch
) => {
  const url = UPDATE_TEAM_URL;
  return dispatch({
    type: UPDATE_TEAM,
    payload: await Service({
      method: "put",
      url,
    }),
  });
};

export const deleteTeam = () => async (
  dispatch
) => {
  const url = DELETE_TEAM_URL;
  return dispatch({
    type: DELETE_TEAM,
    payload: await Service({
      method: "delete",
      url,
    }),
  });
};


