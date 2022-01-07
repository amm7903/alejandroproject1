import React from 'react'
import signed1 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/signed1.png'
import signed2 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/signed2.png'
import signed3 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/signed3.png'
import signed4 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/signed4.png'
import signed5 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/signed5.png'

export default function SignedPlayer() {
    return (
        <div className='signed'>
            <div>
            <h1 className='signedtitle1'>Signed Players</h1>

            {/* images */}
            <div className='signedimages'>
            <img src={signed1} alt="pic1" height="300px" width="900px" /> <br/>
            <img src={signed2} alt="pic2" height="300px" width="900px"/> <br/>
            <img src={signed3} alt="pic3"height="300px" width="900px"/> <br/>
            <img className='gabriel' alt="pic4" src={signed4} height="300px" width="900px"/><br/>
            <img className="leland" alt="pic5" src={signed5} height="300px" width="900px"/>


            </div>
            
            
            </div>
        </div>
    )
}
