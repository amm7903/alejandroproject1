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
    {/* <h2>Information about your Team:</h2> */}
    {/* <h3>Team Info for : {teamToDisplay.name}</h3> */}
    <h1 className="display-6">Information about your team</h1>
    <h1 className="display-3">Team info for {teamToDisplay.name}</h1>
    <h4>Add Players</h4>
    <AddPlayer setPlayers={setPlayers} teamToDisplay={teamToDisplay}/>
    <table className='table table-hover' teamToDisplay={teamToDisplay}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Goals</th>
                <th>Assists</th>
            </tr>
        </thead>
        <tbody>
{players.map(player => {
    return (
    <PlayerCardInTeam key={player.id} player={player} playerName={player.name} goals={player.goals} assists={player.assists} setPlayers={setPlayers} />)
})}
</tbody>
</table>
 </div>
)}
