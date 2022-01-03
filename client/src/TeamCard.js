import React from 'react'

export default function TeamCard({team, setTeamToDisplay, setTeams, name, teamToDisplay}) {

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
    <h3> Team Name: {name} </h3>
    <button onClick={handleDelete}> Delete Team</button>
    <button onClick={handleClick}>Click to Display Team information</button>
    <button onClick={hideTeamInfo}>hide Team Info</button>
    {/* {team ? (
        <button onClick={handleClick}> show team</button>
    ) : (
        <button onClick={handleClick}> hide team</button>
    )}
        </div>
    )
} */}
</div>
 )}