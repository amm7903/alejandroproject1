import React from 'react'
import TeamCard from './TeamCard'

export default function PlayerCardInTeam({player, goals, assists, playerId, setPlayers}) {

    
function handleDelete(id) {
        fetch(`/players/${playerId}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
               setPlayers(donut => {
                   const playerArray = [...donut]
                   return playerArray.filter(onePlayer => {
                       return onePlayer.id !== player.id
                   })
               })
                alert("player deleted!")
            }
        })
    }
     return (
        <div className='PlayerInTeam'>
            <p>{player}</p>
           <p> {goals}</p>
           <p>{assists}</p>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

// setPlayers((players) =>
                //     players.filter((player) => player.id !== player.id)
                // );