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

function onUpdatePlayer(updatedPlayer) {
    const updatedPlayers = players.map(
      playerOne => {
        if (playerOne.id === updatedPlayer.id) {
          return updatedPlayer
        } else {return playerOne}
      }
    )
    setPlayers(updatedPlayers)
  }

  return (
     
        <div>
        
{players.map((player) => (
                
                <PlayerCard players={players} player={player} key={player.id} setPlayers={setPlayers} onUpdatePlayer={onUpdatePlayer} />
            ))}
        </div>
        )}