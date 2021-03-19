import React, {Component} from 'react'
import MyTeams from '../my-teams/myTeams'
import TopFive from '../top-five/topFive'
import PickRate from '../pick-rate/pickRate'
import './home.css'
import { connect } from 'react-redux'

export class Home extends Component {
  render = () => {
    return(
      <main>
          <div className="home-container">
            <div className="home-my-teams">
              <MyTeams />
            </div>
            <div className="tops-and-pick">
              <TopFive />
              <PickRate />
            </div>
          </div>
      </main>
    )
  }
}

const mapStateToProps = () => {
  return {
  };
}

export default connect(mapStateToProps, {})(
  Home
);