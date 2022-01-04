import React from 'react'
import { useState } from 'react'

export default function AddPlayer({setPlayers, teamToDisplay}) {
  const [formData, setFormData] = useState(
      {
          "name": "",
          "goals": "",
          "assists": "",
          "clubs": "",
          "details": "",

      }
  )

  function handleOnChange(e){
    setFormData({...setFormData, [e.target.value] :e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    fetch(`/players`, {
        method:'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            "name": e.target.name.value,
            "goals": e.target.goals.value,
            "assists": e.target.assists.value,
            "details": e.target.details.value,
            "clubs": e.target.clubs.value,
            "team_id": teamToDisplay.id

        }),
    })
    .then((r) => r.json())
    .then(data => {
        setPlayers(playersOne => [...playersOne, data]);
    })
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name</label>
                <input onChange={handleOnChange} value={formData.name} type='text' name="name"/>
                <label> Goals </label>
                <input onChange={handleOnChange} value={formData.goals} type='number' name="goals"/>
                <label> Assists </label>
                <input onChange={handleOnChange} value={formData.assists} type='number' name="assists"/>
                <label> Progress</label>
                <input onChange={handleOnChange} value={formData.details} type='text' name="details"/>
                <label> Clubs</label>
                <input onChange={handleOnChange} value={formData.clubs} type='text' name="clubs"/>
                <input type='submit' />
            </form>
        </div>
    )
}
