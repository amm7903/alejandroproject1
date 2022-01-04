import React from 'react'
import { useEffect,useState } from 'react';

export default function PlayerCardTwo({player, player:{id, name, details, clubs, goals, assists}, captureEdit, changeEditState, setPlayers}) {
    const [teams, setTeams] = useState([])
    const [statGoals,setStatGoals] = useState(player.goals)
    const [statAssists, setStatAssists] = useState(player.assists)
 
    function goalCounter(){
        setStatGoals(statGoals + 1)
    }

    function goalMinusCounter(){
        setStatGoals(statGoals - 1)
    }

    function assistCounter(){
        setStatAssists(statAssists + 1)
    }

    function assistMinusCounter(){
        setStatAssists(statAssists -1)
    }
  
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

    function handleUpdate() {
        fetch(`/players/${player.id}`, {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                goals: statGoals,
                assists: statAssists
            }),
        }).then((r) => {
            if (r.ok) {
                alert("player updated!")
            }
        })
    }
    
    return (
        <tr key={id}>
            {/* <td>{id}</td> */}
            <td>{name} </td>
            <td>{statGoals} <br/> <button onClick={goalCounter}>+</button><button onClick={goalMinusCounter}>-</button></td>
            <td>{statAssists} <br/><button onClick={assistCounter}>+</button><button onClick={assistMinusCounter}>-</button></td>
            <td>{clubs}</td>
            <td>{details}</td>
            {teams.map(team => ( 
                <td> {team.name}</td> 
            ))}
            <td>
                <button
                  onClick={() => {
                    captureEdit(player);
                    changeEditState(player)
                  }}
                >
                  Edit
                </button> 
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleUpdate}> Update Stats</button>
            </td>
        </tr>
    )
}
