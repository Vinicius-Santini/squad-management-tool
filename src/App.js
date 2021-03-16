import './App.css';
import Header from './components/header/header.jsx'
import MyTeams from './components/my-teams/myTeams.jsx'
import PickRate from './components/pick-rate/pickRate';
import TopFive from './components/top-five/topFive';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <MyTeams />
          <div className="tops-and-pick">
            <TopFive />
            <PickRate />
          </div>

        </main>

      </div>
    </>
  );
}

export default App;
