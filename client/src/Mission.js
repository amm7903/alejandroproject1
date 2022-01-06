import React from 'react'
import mission1 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/mission1.png'
import jogaway from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/jogaway.png'

export default function Mission() {
    
    return (
        <div className='missionpage'>
            <h1 className='titleMission'> Mission For Our Residency And Showcase Programs </h1>
            <img className="missionpic1" src={mission1} height="500px" width="500px"/>

{/* About Joga */}
            <div>
            <h1 className='titleMission2'> The JOGA WAY </h1>
            <img className="missionpic2" src={jogaway} height="550px" width="890px"/>

            </div>
        </div>
    )
}
