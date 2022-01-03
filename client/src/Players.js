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

  return (
     
        <div>
{players.map((player) => (
                
                <PlayerCard players={players} player={player} key={player.id} setPlayers={setPlayers}/>
            ))}
        </div>
        )}