import React, {Component} from 'react'
import MyTeams from '../my-teams/myTeams'
import TopFive from '../top-five/topFive'
import PickRate from '../pick-rate/pickRate'
import { getPlayers } from "../../store/actions/playersAction"
import { getTeams, sortTeams, deleteTeam } from "../../store/actions/teamsAction"
import './home.css'
import { connect } from 'react-redux'
export class Home extends Component {

  async componentDidMount() {
    const { getPlayers, getTeams } = this.props;
    await getPlayers();
    await getTeams();

  }

  render = () => {
    const { players, teams, sortTeams, deleteTeam } = this.props

    return(
      <main className="home-main">
          <div className="home-container">
            <div className="home-my-teams">
              <MyTeams teams={teams} sortTeams={sortTeams} deleteTeam={deleteTeam} />
            </div>
            <div className="tops-and-pick">
              <TopFive teams={teams.teams} />
              <PickRate players={players.players} />
            </div>
          </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    teams: state.teams
  };
}

export default connect(mapStateToProps, {getPlayers, getTeams, sortTeams, deleteTeam})(
  Home
);