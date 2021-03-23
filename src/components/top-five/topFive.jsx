import React from 'react'
import "./topFive.css"

const TopFive = ({ teams }) => {

    const orderedByAgeDesc = teams.sort((a, b) => ((a.players_avg_age > b.players_avg_age) ? 1 
    : ((b.players_avg_age > a.players_avg_age) ? -1 : 0)));
    const orderedByAgeAsc = teams.sort((a, b) => ((a.players_avg_age < b.players_avg_age) ? 1 
    : ((b.players_avg_age < a.players_avg_age) ? -1 : 0)));
    const topFiveHighest = orderedByAgeDesc.slice(0, 4);
    const topFiveLowest = orderedByAgeAsc.slice(0, 4);

    return (
        <div className="top-five-section">
            <div className="top-five-heading">
                <h6>Top 5</h6>
            </div>
                <div className="top-five-tables-heading">
                    <div className="top-five-high-avg-title">Highest avg age</div>
                    <div className="top-five-low-avg-title">Lowest avg age</div>
                </div>
                <div className="top-five-tables">
                    <div className="top-five-highest-table">
                        { topFiveHighest.map(item => 
                            <div className="top-five-table-item">
                                <div className="top-five-table-item-team">{item.team_name}</div>
                                <div className="top-five-table-item-avg">{item.team_avg_age}</div>
                            </div>
                        )} 
                    </div>
                    <div className="top-five-lowest-table">
                        { topFiveLowest.map(item => 
                            <div className="top-five-table-item">
                                <div className="top-five-table-item-team">{item.team_name}</div>
                                <div className="top-five-table-item-avg">{item.team_avg_age}</div>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    )
}

export default TopFive;