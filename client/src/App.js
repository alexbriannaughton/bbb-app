import './index.css';
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Homepage from './Homepage';
import NavBar from './NavBar';
import BestBathrooms from './BestBathrooms';
import LoginPage from './LoginPage';
import NewBathroomPage from './NewBathroomPage';
import MissionPage from './MissionPage';
import ShowBathroomPage from './ShowBathroomPage';


function App() {

  const [user, setUser] = useState(null)
  const [bathrooms, setBathrooms] = useState([])

  // console.log(user)
  // console.log(bathrooms)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
      fetch('/bathrooms')
      .then(r => r.json())
      .then(b => setBathrooms(b))
  }, [])

    

  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage bathrooms={bathrooms}/>}
        />
        <Route
          path="/login"
          element={<LoginPage
            setUser={setUser}
          />}
        />
        <Route
          path="/best"
          element={<BestBathrooms bathrooms={bathrooms}/>}
        />
        <Route
          path="/new-bathroom"
          element={<NewBathroomPage user={user}/>}
        />
        <Route
          path="/our-mission"
          element={<MissionPage />}
        />
        <Route
          path={`/bathrooms/:bathroomid`}
          element={<ShowBathroomPage user={user}/>}
        />
      </Routes>

    </div>
  );
}

export default App;
