import React from 'react'
import { useEffect, useState } from 'react'
import EditPlayer from './EditPlayer'


export default function PlayerCard({player, setPlayers, players, onUpdatePlayer}) {
   const [teams, setTeams] = useState([])
   const [statGoals,setStatGoals] = useState(player.goals)
   const [statAssists, setStatAssists] = useState(player.assists)

   const [isEditing, setIsEditing] = useState(false)
   const []

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

    return (

    <div className='app-container'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th> Goals</th>
                    <th> Assists </th>
                    <th> Previous Clubs</th>
                    <th> Progress</th>
                    <th> Current Team</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
        <tr>
            <td>{player.name}</td>
            <td>{statGoals} <br/> <button onClick={goalCounter}>+</button><button onClick={goalMinusCounter}>-</button></td>
            <td>{statAssists} <br/> <button onClick={assistCounter}>+</button><button onClick={assistMinusCounter}>-</button></td>
            <td>{player.clubs}</td>
            <td>{player.details}</td>
            {teams.map(team => (
                <td>{team.name}</td>
            ))}
            <td><button onClick={handleDelete}>delete</button></td>
        </tr>
        </tbody>
        </table>
    </div>
    );
};
 
            