import React from 'react'
import "./myTeams.css"
import { useHistory } from "react-router-dom";

const MyTeams = ({teams, sortTeams, deleteTeam }) => {
    const history = useHistory();

    const sortByName = teams => {

        const type = "Name";
        const currentStatus = teams.isSortedByName;

        if(teams.isSortedByName)
        {
          let sortedTeams =  teams.teams.sort((a, b) => (a.team_name > b.team_name ) ? 1 
          : ((a.team_name < b.team_name) ? -1 : 0))

            sortTeams(type, currentStatus, sortedTeams);
        }
        else 
        {
           let sortedTeams = teams.teams.sort((a, b) => (a.team_name < b.team_name ) ? 1 
           : ((a.team_name > b.team_name) ? -1 : 0))

            sortTeams(type, currentStatus, sortedTeams);
        }
    }

    const sortByDesc = teams => {

        const type = "Desc";
        const currentStatus = teams.isSortedByDescription;

        if(teams.isSortedByDescription)
        {
           let sortedTeams =  teams.teams.sort((a, b) => (a.description > b.description) ? 1 
          : ((a.description < b.description) ? -1 : 0))

            sortTeams(type, currentStatus, sortedTeams);
        }
        else
        {
           let sortedTeams =  teams.teams.sort((a, b) => (a.description < b.description) ? 1 
          : ((a.description > b.description) ? -1 : 0));

            sortTeams(type, currentStatus, sortedTeams);
        }
    }

    return (
            <div className="my-teams-section">
                <div className="my-teams-heading">
                    <h6>My teams</h6>
                    <button onClick={() => history.push(`/create`)}>+</button>
                </div>
                <div className="my-teams-table">
                    <div className="my-teams-table-heading">
                        <div className="my-teams-table-heading-title">Name
                            <i>
                                <img className="sort-arrows" src="/img/sort-solid.svg" alt="Setas de ordenação" onClick={(e) => sortByName(teams)}/>
                            </i>
                        </div>
                        <div className="my-teams-table-heading-desc">Description
                            <i>
                                <img className="sort-arrows" src="/img/sort-solid.svg" alt="Setas de ordenação" onClick={(e) => sortByDesc(teams)}/>
                            </i>
                        </div>
                    </div>
                    {
                        teams.sortedTeams && teams.sortedTeams.length > 0 ? 
                        teams.sortedTeams.map((team) => 
                            <div className="my-teams-table-item" key={team.id}>
                                <div className="my-teams-table-item-title">{team.team_name}</div>
                                <div className="my-teams-table-item-desc">{team.description}</div>
                                <i>
                                    <img className="edit-pencil" src="/img/edit.png" alt="Lápis" onClick={() => history.push(`/team/${team.id}`)} />
                                </i>
                                <i>
                                    <img className="trash-can" src="/img/delete.png" alt="Lata de lixo" onClick={(e) => deleteTeam(team.id)} />
                                </i>
                            </div>
                        )
                        : 
                        teams.teams.map((team) => 
                            <div className="my-teams-table-item" key={team.id}>
                                <div className="my-teams-table-item-title">{team.team_name}</div>
                                <div className="my-teams-table-item-desc">{team.description}</div>
                                <i>
                                    <img className="edit-pencil" src="/img/edit.png" alt="Lápis" onClick={() => history.push(`/team/${team.id}`)} />
                                </i>
                                <i>
                                    <img className="trash-can" src="/img/delete.png" alt="Lata de lixo" onClick={(e) => deleteTeam(team.id)} />
                                </i>
                            </div>
                        )
                    }
                </div>
            </div>
    )
}

export default MyTeams
