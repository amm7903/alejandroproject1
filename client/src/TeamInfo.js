import React from 'react'
import { useState,useEffect } from 'react'
import PlayerCardInTeam from './PlayerCardInTeam'
import AddPlayer from './AddPlayer'

export default function TeamInfo({teamToDisplay}) {
const [players, setPlayers] = useState([])

useEffect(() => {
    fetch("/players")
    .then(resp => resp.json())
    .then(data => {
        setPlayers(data.filter(player => player.team_id === teamToDisplay.id));
    })
    .catch(error => console.log(`Here is your error: ${error}`))
}, [teamToDisplay])
    
return (
    <div className='teamInfo'>
    <h2>Information about your Team:</h2>
    <h3>Team Info for : {teamToDisplay.name}</h3>
    <h4>Players</h4>
    <AddPlayer setPlayers={setPlayers} teamToDisplay={teamToDisplay}/>
{players.map(player => {
    return (
    <PlayerCardInTeam key={player.id} player={player.name} goals={player.goals} assists={player.assists} setPlayers={setPlayers}  playerId={player.id}/>)
})}

 </div>
)}
