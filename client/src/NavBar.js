import React from 'react'
import { Outlet,Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function NavBar({}) {
  
  return (
        <div>
             <Navbar bg="dark" variant="dark">
      <nav className="nav nav-pills nav-fill">
 |{" "} <Link to="/home" className="nav-link active" aria-current="page">Home</Link> |{" "}
  <Link to="/mission" className="nav-link active" aria-current="page" >Mission</Link> |{" "}
  <Link to="/upcomingtrips" className="nav-link active" aria-current="page" >Upcoming Trips</Link> |{" "}
  <Link to="/previoustrips" className="nav-link active" aria-current="page" >Previous Trips</Link> |{" "}
  <Link to="/signedplayers" className="nav-link active" aria-current="page"> Signed Players </Link> |{" "}
  <Link to="/loginpage" className="nav-link active" aria-current="page"> Login </Link> |{" "}
  <Link to="/signup" className="nav-link active" aria-current="page"> Sign up </Link> |{" "}
  <Link to="/players" className="nav-link active" aria-current="page"> Players </Link> |{" "}
  <Link to="/teamcontainer" className="nav-link active" aria-current="page"> Teams </Link>  
</nav>
      </Navbar>
      <Outlet />
        </div>
    )
}
