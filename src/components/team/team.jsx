import React, {Component} from "react"
import "./team.css"
import { connect } from "react-redux"
import { getPlayers, getMatchedPlayers } from "../../store/actions/playersAction";
import { changeFormation, 
changeName, 
changeWebSite, 
changeDescription, 
changeTeamType,
changeTags,
createTeam,
updateTeam,
addPlayerToTeam,
clearCurrentPlayers
} from "../../store/actions/teamsAction";
import {Redirect} from "react-router-dom";

export class Team extends Component {
    async componentDidMount() {
        const { getPlayers } = this.props;
        await getPlayers();
    }

    onChangeName = (value) => {
        const { changeName } = this.props

        document.getElementById("team-name").classList.remove("invalid-input");
        document.getElementById("team-name-title").classList.remove("invalid-title");

        changeName(value);
    }

    onChangeWebSite = (value) => {
        const { changeWebSite } = this.props

        document.getElementById("team-website").classList.remove("invalid-input");
        document.getElementById("team-website-title").classList.remove("invalid-title");

        changeWebSite(value);
    }

    onChangeDescription = (value) => {
        const { changeDescription } = this.props

        changeDescription(value);
    }

    onChangeTeamType = (value) => {
        const { changeTeamType } = this.props

        document.getElementById("team-type-title").classList.remove("invalid-title");
        
        changeTeamType(value);
    }

    onChangeTags = (value) => {
        const { changeTags } = this.props

        changeTags(value);
    }
    
    onChangeFormation = (value) => {
        const { changeFormation, clearCurrentPlayers } = this.props;

        const chossedOption = value.split(' - ');

        const formation = chossedOption.map((item) => parseInt(item));

        changeFormation(formation);
        clearCurrentPlayers();
    }

    buildFormation = (currentFormation) => {
      return currentFormation.map(this.buildPlayersFormation);
    }

    buildPlayersFormation = (numberOfPlayers) => {
        const players = [];

        
        for(let i = 0; i < numberOfPlayers; i++){
            players.push(<div className="field-position player" ></div>)
        }

        
        return players;
    }

    validateWebSite(string) {
        let url;

        try {
            url = new URL(string);
          } catch (_) {
            return false;  
          }
        
          return url.protocol === "http:" || url.protocol === "https:";
    }

    searchFunction = (value) => {
        const { players, getMatchedPlayers} = this.props;

        const matched = players.players != null && players.players.length > 0 && value != null && value.length > 0 ?
        players.players.filter((player) => {
            return player.first_name.toLowerCase().includes(value) 
            || player.last_name.toLowerCase().includes(value) 
            || player.first_name.includes(value)
            || player.last_name.includes(value)
            || `${player.first_name} ${player.last_name}`.includes(value)
            || `${player.first_name} ${player.last_name}`.toLowerCase().includes(value)
        }) : null

        getMatchedPlayers(matched);
    }

    verifySubmitedContent = () => {
        const { teams, match, updateTeam, createTeam } = this.props;
        let verifyName;
        let verifyWebSite;
        let verifyTeamType;
        let verifyPlayers;

        if (teams.currentName !== ""){
            verifyName = true;
        }
        else
        {
            document.getElementById("team-name").classList.add("invalid-input")
            document.getElementById("team-name-title").classList.add("invalid-title")
        }

        if (teams.currentWebsite !== "" && this.validateWebSite(teams.currentWebsite)){
            verifyWebSite = true;
        }
        else
        {
            document.getElementById("team-website").classList.add("invalid-input")
            document.getElementById("team-website-title").classList.add("invalid-title")
        }

        if (teams.currentTeamType !== ""){
            verifyTeamType = true;
        }
        else
        {
            document.getElementById("team-type-title").classList.add("invalid-title")
        }

        if(teams.currentPlayers.length === 11){
            verifyPlayers = true;
        }
        else
        {
            document.getElementById("player-search").classList.add("invalid-input")
            document.getElementById("player-search-title").classList.add("invalid-title")
        }

        if(verifyName
            && verifyWebSite
            && verifyTeamType
            && verifyPlayers)
        {

            const params = Object.keys(match.params);

            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            let ageSum = teams.currentPlayers.age.reduce(reducer);

            let team ={
                id: teams.teams[teams.teams.length - 1].id + 1,
                formation: teams.currentFormation,
                team_name: teams.currentName,
                team_website: teams.currentFormation,
                description: teams.currentDescription,
                team_type: teams.currentTeamType,
                tags: teams.currentTags,
                team_players: teams.currentPlayers,
                team_avg_age: ageSum / 11
            }

            if(params.length > 0 ){
                updateTeam(team);

                <Redirect to="/" />
            }
            else{
                createTeam(team);

                <Redirect to="/" />
            }
            
        }

    }

    addPlayer(player) {
        const { addPlayerToTeam } = this.props;

        addPlayerToTeam(player);
    }


    render = () => {
        const { matchedPlayers, currentFormation, teams } = this.props;
        const idList = teams.currentPlayers.map(player => player.id);
 
        return(
        <main className="team-main">
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
                                
                            <div className="team-name-and-desc-fields"> 
                                <label id="team-name-title" for="Team name" className="team-fields-title">Team name</label>
                                <input id="team-name" type="text" name="Team name" placeholder="" className="team-text-input" onChange={(e) => this.onChangeName(e.target.value)} required/>
                                <label className="team-fields-title team-desc-title">Description</label>  
                                <textarea name="Team description" className="team-desc-text" onChange={(e) => this.onChangeDescription(e.target.value)}></textarea>          
                            </div>
                            <div className="team-website-field">
                                <label id="team-website-title" for="Team website" className="team-fields-title">Team website</label>
                                <input id="team-website" type="text" name="Team website" className="team-text-input" onChange={(e) => this.onChangeWebSite(e.target.value)} required></input>
                                <div id="team-type-title" className="team-type-title">Team type</div>
                                <div className="team-type-options">
                                    <input type="radio" name="team-type" value="real" onClick={(e) => this.onChangeTeamType(e.target.value)} className="team-type-input"/>
                                    <label className="team-type-input-title" for="real">Real</label>
                                    <input type="radio" name="team-type" value="fantasy" onClick={(e) => this.onChangeTeamType(e.target.value)} className="team-type-input"/>     
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
                                    <select onChange={(e) => this.onChangeFormation(e.target.value)} className="squad-config-formation-selector" name="Formation">
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
                                    <div className="field-row">
                                        <div className="player">
                                    </div></div>
                                    
                                    {this.buildFormation(currentFormation).map((row) => 
                                    <div className="field-row">{row}</div>)}         
                                </div>
                                <button className="save-changes-button" onClick={this.verifySubmitedContent}>Save</button>
                            </div>
                            <div className="squad-config-search-and-player">
                                <div className="squad-config-search">
                                    <label id="player-search-title" className="team-fields-title" for="Search Players">Search Players</label>
                                    <input id="player-search" type="text" name="Search Players" className="team-text-input" onChange={(e) => this.searchFunction(e.target.value)}></input>                         
                                </div>
                                {  matchedPlayers != null && matchedPlayers.length > 0  && !idList.includes(matchedPlayers.map(mp => mp.id)) ? matchedPlayers.map((matchedPlayer) => 
                                    <div id="player-result-${}" onClick={() => this.addPlayer(matchedPlayer)} className="squad-config-result" key={matchedPlayer.id}>
                                        <div className="squad-config-result-container">
                                            <div className="squad-config-result-name-and-nationality">
                                                <div className="squad-config-result-content">Name: <div className="squad-config-result-text">{`${matchedPlayer.first_name} ${matchedPlayer.last_name}`}</div></div>
                                                <div className="squad-config-result-content">Nationality: <div className="squad-config-result-text">{matchedPlayer.nationality}</div></div>
                                            </div>
                                            <div className="squad-config-result-age">
                                                <div className="squad-config-result-content">Age: <div className="squad-config-result-text">{matchedPlayer.age}</div></div>
                                            </div>
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
            </main>
    );
    };
}

const mapStateToProps = (state) => {
    return {
      players: state.players,
      matchedPlayers: state.players.matchedPlayers,
      currentFormation: state.teams.currentFormation,
      teams: state.teams
    };
  };
  
  export default connect(mapStateToProps, { getPlayers, getMatchedPlayers, createTeam, updateTeam,
    changeFormation,
    changeName, 
    changeWebSite, 
    changeDescription, 
    changeTeamType,
    changeTags,
    addPlayerToTeam,
    clearCurrentPlayers })(
    Team
  );
