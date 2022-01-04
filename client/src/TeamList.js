import React from 'react'
import TeamCard from './TeamCard'

export default function TeamList({teams, setTeamToDisplay, setTeams, teamToDisplay}) {
    return (
        <div className='TeamList'>
            {/* <h2> Chosen Team</h2> */}
            {/* <p className="fs-2">Chosen Team:</p> */}
            <div className='teams'>
                {teams.map(team => <TeamCard key={team.id} name={team.name} team={team} setTeamToDisplay={setTeamToDisplay} setTeams={setTeams} teamToDisplay={teamToDisplay}/>)}
            </div>
        </div>
    )
}
