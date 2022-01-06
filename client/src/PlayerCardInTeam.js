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
        <div>
        <div className='row2'>
  {/* <div class="col-sm-3">Name: {playerName}</div>
  <div class="col-sm-3">Goals: {goals}</div>
  <div class="col-sm-3">Assists: {assists}</div>
  <div class="col-sm-3">Actions: <button onClick={handleDelete}> Delete</button></div> */}
          
  <> Name: {playerName}</>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  <>Goals: {goals}</>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  <>Assists: {assists}</>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  <> Actions:<button onClick={handleDelete}> Delete</button></>
    </div>
        </div> 
        </div>
    )
}
