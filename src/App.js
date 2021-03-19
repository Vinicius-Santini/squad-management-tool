import './App.css';
import Header from './components/header/header.jsx'
import MyTeams from './components/my-teams/myTeams.jsx'
import PickRate from './components/pick-rate/pickRate';
import TopFive from './components/top-five/topFive';
import Home from './components/home/home'
import Team from './components/team/team'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Team />
      </div>
    </>
  );
}

export default App;
