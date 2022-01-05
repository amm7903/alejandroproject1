import React from 'react'
import TeamInfo from './TeamInfo';
import TeamList from './TeamList';
import { useState } from 'react';

export default function TeamContainer({teams, setTeams}) {
    const [teamToDisplay, setTeamToDisplay] = useState("No Team Yet")
    const [formData, setFormData] = useState(
        {
            "name": ""
        }
    )
    
    function handleOnChange(e){
        setFormData({...formData, [e.target.name] :e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
    console.log(formData)
    fetch("/teams", {
        method:'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            "name": e.target.name.value
        }),
    })
    .then((r) => r.json())
    .then(data => {
        setTeams(teams => [...teams, data]);
    })
  }

  
    return (
        <div className='currentTeam'>
            {teamToDisplay === 'No Team Yet' ?  <h1 className="display-6">Select a team</h1> : <TeamInfo teamToDisplay={teamToDisplay} />}
  <TeamList teams={teams} setTeams={setTeams} setTeamToDisplay={setTeamToDisplay} teamToDisplay={teamToDisplay}/>
            <div className='TeamForm'>
                <h3>Add Team</h3>
            <form onSubmit={handleSubmit}>
                <label>Team Name:</label>
                <input value={formData.name} onChange={handleOnChange} type='text' name="name" />
                <input type='submit'/>
            </form>
    </div>
        </div>
    )
}

