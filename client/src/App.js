import './index.css';
import { Route, Routes } from "react-router-dom"
import Homepage from './Homepage';
import NavBar from './NavBar';
import BestBathrooms from './BestBathrooms';
import Login from './Login';
import NewBathroomPage from './NewBathroomPage';
import MissionPage from './MissionPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/best"
          element={<BestBathrooms />}
        />
        <Route
          path="/new-bathroom"
          element={<NewBathroomPage />}
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
