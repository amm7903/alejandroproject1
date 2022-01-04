import React from 'react'
import { useState } from 'react'
import { useNavigate} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'


export default function LoginPage({ setUser }) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/home")
        alert("You have successfully logged in")
      }
      else {
        alert("Username or Password does not match")
      }
    });
  }

  function handleLogOut(){
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
        navigate("/home");
        alert("Logout Successful")
      }
    })
  }

  return (
    <div>
     {/* <Button>Test Button</Button> */}
      {/* <Button onClick={handleLogOut}> Logout </Button> */}
      <form onSubmit={handleSubmit}>
        <p className="fs-1">Login</p>
        <label htmlFor="username">Username: </label> {" "}
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label> {" "}
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p className="fs-1">Logout</p> {" "} 
      <Button variant="secondary" onClick={handleLogOut}> Logout </Button>
    </div>
  )
}
