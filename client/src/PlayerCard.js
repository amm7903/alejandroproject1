import React from 'react'
import { useEffect, useState } from 'react'

export default function PlayerCard({player}) {
   const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch("/teams")
        .then(response => response.json()) 
        .then(data => setTeams(data))
        }, [])

    return (
        <div>
            {teams.map(team => (
                <h1> {team.name} {player.team_id}</h1>
            ))}
    {/* <h1>{player.name}</h1> */}
        </div>
    )
}
