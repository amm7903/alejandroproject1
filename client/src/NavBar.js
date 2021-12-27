import React from 'react'
import { Outlet,Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function NavBar({}) {
  
  return (
        <div>
             <Navbar bg="dark" variant="dark">
      <nav className="nav nav-pills nav-fill">
      {/* <img className='jogaImage2' src={img1} alt="image1" height="43px" width="60px"/> ||||||{" "} */}
 |{" "} <Link to="/home" class="nav-link active" aria-current="page">Home</Link> |{" "}
  <Link to="/mission" class="nav-link active" aria-current="page" >Mission</Link> |{" "}
  <Link to="/upcomingtrips" class="nav-link active" aria-current="page" >Upcoming Trips</Link> |{" "}
  <Link to="/previoustrips" class="nav-link active" aria-current="page" >Previous Trips</Link> |{" "}
  <Link to="/signedplayers" class="nav-link active" aria-current="page"> Signed Players </Link> |{" "}
  <Link to="/loginpage" class="nav-link active" aria-current="page"> Login </Link> |{" "}
  <Link to="/signup" class="nav-link active" aria-current="page"> Sign up </Link> |{" "}
  <Link to="/players" class="nav-link active" aria-current="page"> Players </Link> |{" "}
  <Link to="/teamcontainer" class="nav-link active" aria-current="page"> Teams </Link>  
</nav>
      </Navbar>
      <Outlet />
        </div>
    )
}
