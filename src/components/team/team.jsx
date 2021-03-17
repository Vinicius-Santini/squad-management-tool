import React from "react"
import "./team.css"
import { connect } from "react-redux";

const Team = () =>{

    return(
        <div className="team-section">
            <div className="team-heading">
                <h6>Create your team</h6>
            </div>
            <div className="team-content">
                <div className="team-info">
                    <div className="team-info-title">TEAM INFORMATION</div>
                </div>
                <div className="team-info-fields">
                    <div className="team-name-and-type-fields"> 
                        <label for="Team name" className="team-fields-title">Team name</label>
                        <input type="text" name="Team name" placeholder="" className="team-text-input"/>
                        <div className="team-type-title">Team type</div>
                        <div className="team-type-options">
                            <input type="radio" name="team-type" value="real" className="team-type-input"/>
                            <label className="team-type-input-title" for="real">Real</label>
                            <input type="radio" name="team-type" value="fantasy" className="team-type-input"/>     
                            <label className="team-type-input-title" for="fantasy">Fantasy</label>
                        </div>              
                    </div>
                    <div className="team-website-field">
                        <dlabel for="Team website" className="team-fields-title">Team website</dlabel>
                        <input type="text" name="Team website" placeholder="http://myteam.com" className="team-text-input"></input>
                    </div>
                </div>
                <div className="squad-config-info">
                        <div className="squad-config-title">CONFIGURE SQUAD</div>
                </div>
                <div className="squad-config">
                    <div className="squad-config-formation-and-field">                    
                        <div className="squad-config-formation">
                            <label className="squad-config-formation-title" for="Formation">Formation</label>
                            <select className="squad-config-formation-selector" name="Formation">
                                <option value="3 - 2 - 2">3 - 2 - 2 - 3</option>
                                <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
                                <option value="3 - 4 - 3">3 - 4 - 3</option>
                                <option value="3 - 5 - 2">3 - 5 - 2</option>
                                <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
                                <option value="4 - 3 - 1 - 1">4 - 3 - 1 - 1</option>
                                <option value="4 - 3 - 2">4 - 3 - 2</option>
                                <option value="4 - 4 - 2">4 - 4 - 2</option>
                                <option value="4 - 5 - 1">4 - 5 - 1</option>
                                <option value="5 - 4 - 1">5 - 4 - 1</option>
                            </select>
                        </div>
                        <div className="squad-config-field">
                        </div>
                        <button className="save-changes-button">Save</button>
                    </div>
                    <div className="squad-config-search-and-player">
                        <div className="squad-config-search">
                            <label className="team-fields-title" for="Search Players">Search Players</label>
                            <input type="text" name="Search Players" className="team-text-input"></input>                           
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Team;
