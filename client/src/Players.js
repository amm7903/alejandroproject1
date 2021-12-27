import React from 'react'
import PlayerCard from './PlayerCard'
import { useEffect, useState } from 'react'

export default function Players({}) {

const [players, setPlayers] = useState([])

useEffect(() => {
    fetch("/players")
      .then(response => response.json())
      .then(data => setPlayers(data))
     }, [])

// let displayPlayers = players.map(player => {
//     return (
//       <PlayerCard players={player} key={player.id} />
//     )   })
    
  return (
        // <div>
        //     <h1> {displayPlayers} </h1>
        // </div>
        <div>
{players.map((player) => (
                
                <PlayerCard player={player} key={player.id} />
            ))}
        </div>
        )}