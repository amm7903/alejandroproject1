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
            <img src={signed1} height="300px" width="900px"/>
            <img src={signed2} height="300px" width="900px"/>
            <img src={signed3} height="300px" width="900px"/>
            <img className='gabriel' src={signed4} height="300px" width="900px"/>
            <img className="leland" src={signed5} height="300px" width="900px"/>


            </div>
            
            
            </div>
        </div>
    )
}
