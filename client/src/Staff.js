import React from 'react'
import ale from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/ale.png'
import keph from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/kephpic.png'
import nopic from '/Users/alejandromarcano/Development/code/Mod5/project1/ale-project-1/client/src/images/nopic.png'

export default function Staff() {
    return (
        <div>
            <h1 className='stafftitle'>JOGA Staff</h1>
           <div class="row row-cols-1 row-cols-sm-2 g-3">
  <div class="col">
    <div class="card">
      <img className='staff1' src={ale} width="250px" height="300" alt="ale"/>
      <div class="card-body">
          <h2>Alejandro Marcano</h2>
        <h5 class="card-title">Joga Software Engineer</h5>
        <p class="card-text"> Software Engineer with background in mathematics (BA in Math) and math education. My journey from math teacher to software engineer began with a love of technology and sports. Ambitious Flatiron School Software Engineering program and Penn State math graduate developing user-friendly websites with clean code. I bring the ability to work quickly, act readily, and have the willingness to push comfort zone boundaries. My experience includes working with nonprofits aiding families in need during the pandemic, providing math education for Latino immigrants, and making websites for small businesses.
</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={keph} width="250px" height="300" alt="keph"/>
      <div class="card-body">
      <h2>Kephern Fuller</h2>
        <h5 class="card-title">Joga President</h5>
        <p class="card-text">Software Engineer with background in mathematics (BA in Math) and math education. My journey from math teacher to software engineer began with a love of……. Ambitious Flatiron School Software Engineering program and Penn State math graduate developing user-friendly websites with clean code. I bring the ability to work quickly, act readily, and have the willingness to push comfort zone boundaries. My experience includes working with nonprofits aiding families in need during the pandemic, providing math education for Latino immigrants, and making websites for small businesses.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={nopic} width="250px" height="300" alt="staff"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={nopic} width="250px" height="300" alt="nopic"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
