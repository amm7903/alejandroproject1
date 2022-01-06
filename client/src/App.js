import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';    
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Mission from './Mission'
import UpcomingJoga from './UpcomingJoga'
import PreviousTrips from './PreviousTrips.js'
import SignedPlayer from './SignedPlayer'
import LoginPage from './LoginPage'
import SignUp from './SignUp';
import Players from './Players';
import { useEffect, useState } from 'react';
import TeamContainer from './TeamContainer';
import Staff from './Staff';

export default function App() {
  const [user, setUser] = useState(false)
  const [teams, setTeams] = useState([])
    
  useEffect(() => {
fetch("/teams")
.then(response => response.json()) 
.then(data => setTeams(data))
}, [])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)
        )
      }
    });
  },[])
  
  return (
    
    <div className='intro'>
     <NavBar user={user} setUser={setUser} />
     <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/mission" element={<Mission />}/>
        <Route path="/upcomingtrips" element={<UpcomingJoga />} />
      <Route path="/previoustrips" element={<PreviousTrips/>} />
      <Route path="/signedplayers" element={<SignedPlayer />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/loginpage" element={<LoginPage setUser={setUser} />} />
      <Route path="/signup" element={<SignUp setUser={setUser}/>} />
      <Route path="/players" element={<Players />}/>
      <Route path="/teamcontainer" element={<TeamContainer teams={teams} setTeams={setTeams}/>}> </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
    </div>


  )}