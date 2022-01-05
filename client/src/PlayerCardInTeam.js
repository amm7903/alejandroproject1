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
                alert("player deleted!")
            }
        })
    }

     return (
        <div className='PlayerInTeam'>
         
         <tr>
      <td scope="row">{playerName}</td>
      <td>{goals}</td>
      <td>{assists}</td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
    <tr></tr>
         
            {/* <div class="row">
                <h6>{}</h6>
  <div class="col-sm-3">Name: {playerName}</div>
  <div class="col-sm-3">Goals: {goals}</div>
  <div class="col-sm-3">Assists: {assists}</div>
  <div class="col-sm-3">Actions: <button onClick={handleDelete}> Delete</button></div>
</div> */}
            {/* <h4>All Players </h4>
            <p>{playerName}</p>
           {goals}
           <p>{assists}</p>
            <button onClick={handleDelete}> Delete </button> */}
            
        </div>
    )
}
