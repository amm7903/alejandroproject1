import React from 'react'
import { useEffect, useState } from 'react'

export default function PlayerCard({player, setPlayers, players}) {
   const [teams, setTeams] = useState([])
  
    useEffect(() => {
        fetch('/teams')
        .then(resp => resp.json())
        .then(data => {
            setTeams(data.filter(team => team.id === player.team_id));
        })
        .catch(error => console.log(`Here is your error: ${error}`))
    }, [])

    function handleDelete() {
        fetch(`/players/${player.id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                setPlayers((donut) => {
                    const playersarray = [...donut]
                   return playersarray.filter(onePlayer => {
                       return onePlayer.id !== player.id
                    })
                })
            }
        })
    }

    return (
        <div>
         {teams.map(team => (
                <h5> {team.name} </h5>
            ))}
    <h6> {player.name} <button onClick={handleDelete}> delete</button></h6>
        </div>
    )
}
 // setPlayers((players) =>
                //     players.filter((player) => player.id !== id)
                // );
                // alert("player deleted!")
            