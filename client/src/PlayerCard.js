import React from 'react'
import { useState } from 'react'
import PlayerCardTwo from './PlayerCardTwo'
import EditPlayer from './EditPlayer'


export default function PlayerCard({player, setPlayers, players, onUpdatePlayer}) {
//    const [teams, setTeams] = useState([])
//    const [statGoals,setStatGoals] = useState(player.goals)
//    const [statAssists, setStatAssists] = useState(player.assists)

   const [isEditing, setIsEditing] = useState(false)
   const [editForm, setEditForm] = useState({
       name: "",
       details: "",
       clubs: ""
   })

   function handlePlayerUpdate(updatedPlayer){
       setIsEditing(false);
       onUpdatePlayer(updatedPlayer)
   }

   function handleChange(e){
       setEditForm({
           ...editForm,
           [e.target.name]: e.target.value
       })
   }

   function changeEditState(player){
    if (player.id === editForm.id) {
        setIsEditing(isEditing => !isEditing)
    } else if (isEditing === false) {
        setIsEditing(isEditing => !isEditing)
    }
   }

   function captureEdit(clickedPlayer){
       let filtered = players.filter(playerTwo => playerTwo.id === clickedPlayer.id)
       setEditForm(filtered[0])
   }

    // function goalCounter(){
    //     setStatGoals(statGoals + 1)
    // }

    // function goalMinusCounter(){
    //     setStatGoals(statGoals - 1)
    // }

    // function assistCounter(){
    //     setStatAssists(statAssists + 1)
    // }

    // function assistMinusCounter(){
    //     setStatAssists(statAssists -1)
    // }

    // useEffect(() => {
    //     fetch('/teams')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setTeams(data.filter(team => team.id === player.team_id));
    //     })
    //     .catch(error => console.log(`Here is your error: ${error}`))
    // }, [])

    // function handleDelete() {
    //     fetch(`/players/${player.id}`, {
    //         method: 'DELETE',
    //     }).then((r) => {
    //         if (r.ok) {
    //             setPlayers((donut) => {
    //                 const playersarray = [...donut]
    //                return playersarray.filter(onePlayer => {
    //                    return onePlayer.id !== player.id
    //                 })
    //             })
    //         }
    //     })
    // }
    return (

    <div className='app-container'>
        {isEditing?
          (<EditPlayer
            editForm={editForm}
            handleChange={handleChange}
            handlePlayerUpdate={handlePlayerUpdate}
          />) : null}
        <table className='playerTable'>
            <thead>
                <tr>
                     {/* <th>ID</th>  */}
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
            {
                <PlayerCardTwo
                  player={player}
                  captureEdit={captureEdit}
                  changeEditState={changeEditState}
                  setPlayers={setPlayers}
                /> }
        </tbody>
        </table>
    </div>
    );
};
 








/* <div className='app-container'>
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
}; */
            