import React from 'react'

export default function PlayerCardInTeam({playerName, goals, assists, setPlayers,player}) {

    
function handleDelete() {
        fetch(`/players/${player.id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
               setPlayers(donut => {
                   const playerArray = [...donut]
                   return playerArray.filter(onePlayer => {
                       return onePlayer.id !== player.id
                   })
               })
                alert("player deleted yoo!")
            }
        })
    }
     return (
        <div className='PlayerInTeam'>
            <p>{playerName}</p>
           <p> {goals}</p>
           <p>{assists}</p>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

// setPlayers((players) =>
                //     players.filter((player) => player.id !== player.id)
                // );