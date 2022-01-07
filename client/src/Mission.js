import React from 'react'
import mission1 from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/mission1.png'
import jogaway from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/jogaway.png'

export default function Mission() {
    
    return (
        <div className='missionpage'>
            <div className='titlem'>
            <h1 className='titleMission'> Mission For Our Residency And Showcase Programs </h1>
            <img className="missionpic1" alt="mission" src={mission1} height="500px" width="500px"/>
            </div>
{/* About Joga */}
            <div className='titlem2'>
            <h1 className='titleMission2'> The JOGA WAY </h1>
            <img className="missionpic2" alt="jogaway" src={jogaway} height="550px" width="1000px"/>

            </div>
        </div>
    )
}
