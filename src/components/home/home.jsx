import React from 'react'
import MyTeams from '../my-teams/myTeams'
import TopFive from '../top-five/topFive'
import PickRate from '../pick-rate/pickRate'

const Home = () =>{
    return(
    <main>
          <MyTeams />
          <div className="tops-and-pick">
            <TopFive />
            <PickRate />
          </div>
    </main>
    )
}

export default Home;