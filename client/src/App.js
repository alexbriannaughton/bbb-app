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
import MirrorPage from './MirrorPage';



function App() {

  const [user, setUser] = useState([])
  const [userReviews, setUserReviews] = useState()
  const [userFavorites, setUserFavorites] = useState()

  const [bathrooms, setBathrooms] = useState([])


  const APIKey =
    "AIzaSyDieB4V0IYhdHBcPm1JNClD_RVu7w1tac0"


  // console.log(bathrooms)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });

  }, []);


  useEffect(() => {
    fetch('/bathrooms')
      .then(r => r.json())
      .then(b => {
        setBathrooms(b)
      })
  }, [])

  useEffect(() => {
    if (user) {
        setUserReviews(user.reviews)
        setUserFavorites(user.favorites)
    }
},[user])



  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage bathrooms={bathrooms} APIKey={APIKey} />}
        />
        <Route
          path="/login"
          element={<LoginPage
            setUser={setUser}
          />}
        />
        <Route
          path="/best"
          element={<BestBathrooms bathrooms={bathrooms} />}
        />
        <Route
          path="/new-bathroom"
          element={<NewBathroomPage setBathrooms={setBathrooms} user={user} APIKey={APIKey} />}
        />
        <Route
          path="/our-mission"
          element={<MissionPage />}
        />
        <Route
          path={`/bathrooms/:bathroomid`}
          element={<ShowBathroomPage
            user={user}
            setUser={setUser}
            APIKey={APIKey}
            userReviews={userReviews}
            setUserReviews={setUserReviews}
            userFavorites={userFavorites}
            setUserFavorites={setUserFavorites}/>}
        />
        <Route
          path={`/mirror`}
          element={<MirrorPage
            user={user}
            setUser={setUser}
            userReviews={userReviews}
            setUserReviews={setUserReviews}
            userFavorites={userFavorites}
            setUserFavorites={setUserFavorites}
            />}
        />
      </Routes>

    </div>
  );
}

export default App;
