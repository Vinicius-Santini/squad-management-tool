import React from 'react'
import "./myTeams.css"

const MyTeams = () => {
    return (
        <div className="my-teams-section">
            <div className="my-teams-heading">
                <h6>My teams</h6>
                <button>+</button>
            </div>
            <div className="my-teams-table">
                <div className="my-teams-table-heading">
                    <div className="my-teams-table-heading-title">Name</div>
                    <div className="my-teams-table-heading-desc">Description</div>
                </div>
                <div className="my-teams-table-item">
                    <div className="my-teams-table-item-title">Barcelona</div>
                    <div className="my-teams-table-item-desc">Barcelona Squad</div>
                </div>
            </div>
        </div>
    )
}

export default MyTeams
