import React from 'react'
import { Outlet,Link } from "react-router-dom";


export default function TeamCard({team}) {

    return (
        <div>
            <Link to="/players" class="nav-link active" aria-current="page"> {team.name} </Link> 
            <Outlet />
        </div>
    )
}
