import React from 'react'

export default function EditPlayer({editForm, handlePlayerUpdate, handleChange}) {
   let {id, name, details, clubs} = editForm

   function handleEditForm(e) {
    e.preventDefault();
    fetch(`/players/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editForm),
    })
        .then(resp => resp.json())
        .then(updatedPlayer => {
            handlePlayerUpdate(updatedPlayer)})
}
    return (
        <div>
            <h4>Edit Player</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="details" value={details} onChange={handleChange}/>
                <input type="text" name="clubs" value={clubs} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
