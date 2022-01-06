import React from 'react'

export default function TeamCard({team, setTeamToDisplay, setTeams, name}) {
    function handleClick(){
        setTeamToDisplay(team) 
        
    }
    function hideTeamInfo(){
        setTeamToDisplay("No Team Yet")
    }
    

    function handleDelete(){
        console.log("heyyy")
        fetch(`/teams/${team.id}`,{
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                setTeams((donut) => {
                    const teamArray = [...donut]
                    return teamArray.filter(oneTeam => {
                      return  oneTeam.id !== team.id 
                    })
                })
            }
        })
    }
 return (
<div className='TeamCard'>
    <h3 className='tName'> {name} </h3> 
    <button onClick={handleClick} type="button" className="btn btn-info">Display Team Info</button> {" "}
    <button onClick={hideTeamInfo}type="button" className="btn btn-secondary"> Hide Team</button> {" "}
    <button onClick={handleDelete} type="button" className="btn btn-danger">Delete Team</button> {" "}
 </div>
 )}