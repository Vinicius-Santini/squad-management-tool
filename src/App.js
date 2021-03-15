import './App.css';
import Header from './components/header/header.jsx'
import MyTeams from './components/my-teams/myTeams.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <MyTeams />
        </main>

      </div>
    </>
  );
}

export default App;
