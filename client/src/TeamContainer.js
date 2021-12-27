import React from 'react'
import TeamCard from './TeamCard'

export default function TeamContainer({teams}) {

    let displayTeams = teams.map(team => {
        return (
          <TeamCard team={team} key={team.id} />
        )   })  
    return (
        <div>
            <h1> {displayTeams}</h1>
        </div>
    )
}

