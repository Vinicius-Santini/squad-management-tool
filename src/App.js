import './App.css';
import Header from './components/header/header.jsx'
import MyTeams from './components/my-teams/myTeams.jsx'
import TopFive from './components/top-five/topFive';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <MyTeams />
          <div>
            <TopFive />
          </div>

        </main>

      </div>
    </>
  );
}

export default App;
