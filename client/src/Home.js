import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';    
import img2 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/jogapic-modified.png'
import img3 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/proplayer1.png'
import img4 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/teampic.png'

export default function Home() {
    return (
        <div>
          <div className='topOfHome'>
            <h1 className='title'> JOGA AMSTERDAM</h1>
      <img className='joga' src={img2} alt="image1" height="250px" width="250px"/>
      
      {/* About section/ end of header*/}
        <div class="card">
          <div class="card-header">
          <h1 className='about'> ELITE INTERNATIONAL FOOTBALL ACADEMY </h1> 
          </div>
        </div>
        </div>
        
    </div>
        
    )
}










// <div class="card">
// <div class="row g-0">
//   <div class="col-5 col-sm-4">
//     <img src={img3} alt="signedplayer" height="300px" width="300px"/>
//   </div>
//   <div class="col-7 col-sm-8">
//     <div class="card-body">
//       <h5 class="card-title">Former Joga Player Signed with Sporting Lisbon! </h5>
//       <p class="card-text">Check out more of our signed players!</p>
//       <Link to="/signedplayers"> Signed Players</Link>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
// </div>
// <div class="card2">
// <div class="row g-0">
//   <div class="col-5 col-sm-4">
//     <img src={img4} alt="signedplayer" height="300px" width="300px"/>
//   </div>
//   <div class="col-7 col-sm-8">
//     <div class="card-body">
//       <h5 class="card-title">Joga Amsterdam vs Volendam </h5>
//       <p class="card-text">Check out our upcoming trips! Fill out the inquiry form and see if you can join us</p>
//       <Link to="/upcomingtrips"> Upcoming Trips</Link>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
// </div>

{/* <div class="card-body">
            <h5 class="card-title1">Joga Foundation </h5>
            <p class="card-text">Joga Amsterdam started in the year 2011 in Washington D.C. with the goal of exposing American children to soccer culture.
            Since then, Joga has provided American players with the opportunity to sign professional soccer contracts in Europe through friendlies,
            tournaments, and the JOGA residency program.  </p>
            
          </div> */}