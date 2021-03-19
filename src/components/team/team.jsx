import React, {Component} from "react"
import "./team.css"
import { connect } from "react-redux"
import { getPlayers, getMatchedPlayers }from "../../store/actions/playersAction";

export class Team extends Component {
    async componentDidMount() {
        const { getPlayers } = this.props;
        await getPlayers();
    }

    

    render = () => {
        const { matchedPlayers } = this.props;

        const searchFunction = (value) => {
            const { players, getMatchedPlayers, matchedPlayers } = this.props;
    
            const matched = players.players != null && players.players.length > 0 && value != null && value.length > 0 ?
            players.players.filter((player) => {
                return player.first_name.toLowerCase().includes(value) 
                || player.last_name.toLowerCase().includes(value);
            }) : null

            getMatchedPlayers(matched);
            console.log(matchedPlayers);
        }

        return(
        <div className="create-edit-team">
            <div className="team-section">
                <div className="team-heading">
                    <h6>Create your team</h6>
                </div>
                <div className="team-all">
                    <div className="team-content">
                        
                        <div className="team-info">
                            <div className="team-info-heading">
                                <div className="team-info-title">TEAM INFORMATION</div>
                            </div>
                            <div className="team-info-fields">
                            <div className="team-name-and-type-fields"> 
                                <label for="Team name" className="team-fields-title">Team name</label>
                                <input type="text" name="Team name" placeholder="" className="team-text-input" required/>
                                <label className="team-fields-title team-desc-title">Description</label>  
                                <textarea name="Team description" className="team-desc-text"></textarea>          
                            </div>
                            <div className="team-website-field">
                                <label for="Team website" className="team-fields-title">Team website</label>
                                <input type="text" name="Team website" className="team-text-input" required></input>
                                <div className="team-type-title">Team type</div>
                                <div className="team-type-options">
                                    <input type="radio" name="team-type" value="real" className="team-type-input"/>
                                    <label className="team-type-input-title" for="real">Real</label>
                                    <input type="radio" name="team-type" value="fantasy" className="team-type-input"/>     
                                    <label className="team-type-input-title" for="fantasy">Fantasy</label>
                                </div>
                                <label className="team-fields-title team-tags-title">Tags</label>  
                                <textarea name="Team tags" className="team-tags-text"></textarea>     
                            </div>
                        </div>
                        </div>
                        
                        <div className="squad-config-info">
                            <div className="squad-config-heading">
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
                                    <div></div>
                                </div>
                                <button className="save-changes-button" type="submit">Save</button>
                            </div>
                            <div className="squad-config-search-and-player">
                                <div className="squad-config-search">
                                    <label className="team-fields-title" for="Search Players">Search Players</label>
                                    <input type="text" name="Search Players" className="team-text-input" onChange={(e) => searchFunction(e.target.value)}></input>                         
                                </div>
                                {  matchedPlayers != null && matchedPlayers.length > 0 ? matchedPlayers.map((matchedPlayer) => 
                                    <div className="squad-config-result" key={matchedPlayer.id}>
                                        <div className="squad-config-result-container">
                                            <div className="squad-config-result-title-and-nacionality">
                                                <div>Name: {`${matchedPlayer.first_name} ${matchedPlayer.last_name}`}</div>
                                                <div>Nationality: {matchedPlayer.nationality}</div>
                                            </div>
                                            <div className="squad-config-result-age">Age:{matchedPlayer.age}</div>
                                        </div>
                                    </div>) : <div></div>
                            }
                            </div>
                        </div>
                    </div>  
                    </div>
                    </div>
                </div>
            </div>
    );
    };
}

const mapStateToProps = (state) => {
    return {
      players: state.players,
      matchedPlayers: state.players.matchedPlayers
    };
  };
  
  export default connect(mapStateToProps, { getPlayers, getMatchedPlayers })(
    Team
  );
