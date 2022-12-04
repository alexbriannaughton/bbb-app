import './index.css';
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Homepage from './Homepage';
import NavBar from './NavBar';
import BestBathrooms from './BestBathrooms';
import LoginPage from './LoginPage';
import NewBathroomPage from './NewBathroomPage';
import MissionPage from './MissionPage';


function App() {

  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<LoginPage
            setUser={setUser}
          />}
        />
        <Route
          path="/best"
          element={<BestBathrooms />}
        />
        <Route
          path="/new-bathroom"
          element={<NewBathroomPage user={user}/>}
        />
        <Route
          path="/our-mission"
          element={<MissionPage />}
        />
      </Routes>

    </div>
  );
}

export default App;
