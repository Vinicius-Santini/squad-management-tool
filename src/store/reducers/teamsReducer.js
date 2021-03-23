/* eslint-disable import/no-anonymous-default-export */
import {
  CHANGE_FORMATION,
  CHANGE_TEAMS_ORDER,
  CHANGE_TEAM_DESCRIPTION,
  CHANGE_TEAM_NAME,
  CHANGE_TEAM_TAGS,
  CHANGE_TEAM_TYPE,
  CHANGE_TEAM_WEBSITE,
  CREATE_NEW_TEAM,
  GET_TEAMS,
  DELETE_TEAM,
  ADD_PLAYER_TO_TEAM,
  CLEAR_CURRENT_PLAYERS,
  UPDATE_TEAM
} from "../actions/actionTypes";

const initialState = {
  teams: [],
  currentFormation: [ 3, 2, 2, 3],
  currentName: "",
  currentWebsite: "",
  currentDescription: "",
  currentTeamType: "",
  currentTags: "",
  currentPlayers: [],
  isSortedByName: false,
  isSortedByDescription: false,
  sortedTeams: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload.teams
      };
    case CHANGE_FORMATION:
      return {
        ...state,
        currentFormation: action.payload
      }
    case CHANGE_TEAMS_ORDER:
      return {
        ...state,
        isSortedByName: action.payload.sortByName,
        isSortedByDescription: action.payload.sortByDesc,
        sortedTeams: action.sortedTeams
      }
    case CHANGE_TEAM_NAME:
      return {
        ...state,
        currentName: action.payload

      }
    case CHANGE_TEAM_WEBSITE:
      return {
        ...state,
        currentWebsite: action.payload

      }
    case CHANGE_TEAM_DESCRIPTION:
      return {
        ...state,
        currentDescription: action.payload

      }
    case CHANGE_TEAM_TYPE:
      return {
        ...state,
        currentTeamType: action.payload

      }
    case CHANGE_TEAM_TAGS:
      return {
        ...state,
        currentTags: action.payload

      }
    case CREATE_NEW_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload]

      }
    case DELETE_TEAM:
      return{
        ...state,
        teams: [...state.teams.filter(team => team.id !== action.payload) ]
      }
    case ADD_PLAYER_TO_TEAM:
      return {
        ...state,
        currentPlayers: [...state.currentPlayers, action.payload]
      }
    case CLEAR_CURRENT_PLAYERS:
      return {
        ...state,
        currentPlayers: action.payload
      }
    case UPDATE_TEAM:
      return {
        ...state,
        teams: state.teams.map(team => {if(team.id === action.payload.id){return action.payload}else{return team}})
      }
    default:
      return state;
  }
}
