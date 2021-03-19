import React from 'react'
import "./myTeams.css"

const MyTeams = (index) => {
    let teams = [{name: 'Real', description: 'Real Squad'}, {name: 'Barcelona', description: 'Barcelona Squad'}]

    const sortByName = teams => {
        
    }

    return (
            <div className="my-teams-section">
                <div className="my-teams-heading">
                    <h6>My teams</h6>
                    <button>+</button>
                </div>
                <div className="my-teams-table">
                    <div className="my-teams-table-heading">
                        <div className="my-teams-table-heading-title">Name
                            <i>
                                <img className="sort-arrows" src="/img/sort-solid.svg" alt="Setas de ordenação" />
                            </i>
                        </div>
                        <div className="my-teams-table-heading-desc">Description
                            <i>
                                <img className="sort-arrows" src="/img/sort-solid.svg" alt="Setas de ordenação" />
                            </i>
                        </div>
                    </div>
                    {
                        teams.map((team) => 
                            <div className="my-teams-table-item">
                                <div className="my-teams-table-item-title">{team.name}</div>
                                <div className="my-teams-table-item-desc">{team.description}</div>
                            </div>
                        )
                    }
                </div>
            </div>
    )
}

export default MyTeams
