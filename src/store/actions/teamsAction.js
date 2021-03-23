import {
  GET_TEAMS,
  GET_TEAMS_URL,
  CHANGE_FORMATION,
  CHANGE_TEAM_WEBSITE,
  CHANGE_TEAM_NAME,
  CHANGE_TEAM_DESCRIPTION,
  CHANGE_TEAM_TYPE,
  CHANGE_TEAM_TAGS,
  CHANGE_TEAMS_ORDER,
  CREATE_NEW_TEAM,
  DELETE_TEAM,
  UPDATE_TEAM,
  ADD_PLAYER_TO_TEAM,
  CLEAR_CURRENT_PLAYERS
} from "./actionTypes";
import Service from "../../api/apiService";

export const getTeams = () => async (dispatch) => {
  const url = GET_TEAMS_URL;
  
  return dispatch({
    type: GET_TEAMS,
    payload: await Service({
      method: "get",
      url,
    }),
  });
};

export const sortTeams = (type, currentStatus, sortedTeams) => (dispatch) => {
  if(type === "Name" && currentStatus)
  {
    return dispatch({
      type: CHANGE_TEAMS_ORDER,
      payload: {
       sortByName: false,
       sortByDesc: false,
       sortedTeams
      },
    });
  }
  else if(type === "Name" && !currentStatus)
  {
    return dispatch({
      type: CHANGE_TEAMS_ORDER,
      payload: {
       sortByName: true,
       sortByDesc: false,
       sortedTeams
      }    
    });
  }
  else if(type === "Desc" && currentStatus)
  {
    return dispatch({
      type: CHANGE_TEAMS_ORDER,
      payload: {
       sortByName: false,
       sortByDesc: false,
       sortedTeams
      }
    });
  }
  else if(type === "Desc" && !currentStatus)
  {
    return dispatch({
      type: CHANGE_TEAMS_ORDER,
      payload: {
       sortByName: false,
       sortByDesc: true,
       sortedTeams
      }
    });
  }
}

export const changeFormation = (formation) => (dispatch) => {
  return dispatch({
      type: CHANGE_FORMATION,
      payload: formation,
  });
};

export const changeName = (name) => (dispatch) => {
  return dispatch({
      type: CHANGE_TEAM_NAME,
      payload: name,
  });
};

export const changeWebSite = (website) => (dispatch) => {
  return dispatch({
      type: CHANGE_TEAM_WEBSITE,
      payload: website,
  });
};

export const changeDescription = (description) => (dispatch) => {
  return dispatch({
      type: CHANGE_TEAM_DESCRIPTION,
      payload: description,
  });
};

export const changeTeamType = (teamType) => (dispatch) => {
  return dispatch({
      type: CHANGE_TEAM_TYPE,
      payload: teamType,
  });
};

export const changeTags = (tags) => (dispatch) => {
  return dispatch({
      type: CHANGE_TEAM_TAGS,
      payload: tags,
  });
};

export const createTeam = (team) => (dispatch) => {
  return dispatch({
    type: CREATE_NEW_TEAM,
    payload: team
  });
}

export const updateTeam = (team) => (dispatch) => {
  return dispatch({
    type: UPDATE_TEAM,
    payload: team
  });
}

export const deleteTeam = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_TEAM,
    payload: id
  });
}

export const addPlayerToTeam = (player) => (dispatch) => {
  return dispatch({
    type: ADD_PLAYER_TO_TEAM,
    payload: player
  });
}

export const clearCurrentPlayers = () => (dispatch) => {
  return dispatch({
    type: CLEAR_CURRENT_PLAYERS,
    payload: []
  });
}


