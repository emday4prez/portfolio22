import React from 'react'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import profilePic from '../assets/profile-pic2.jpg'
function Bio() {
  return (
    <div className='bio-container'>
     
    <div className="bio-text">
       <Accordion defaultActiveKey={['0']} alwaysOpen style={{textAlign: 'left'}}>
   <Accordion.Item eventKey="0">
    <Accordion.Header>Bio</Accordion.Header>
    <Accordion.Body>
    <p>
      I have been learning web development for two years. The focus of my learning has been on fullstack JavaScript development using React and Node.js. I am also skilled with CSS and design tools like Figma and AdobeXD. I am currently enrolled in M.I.T.'s M.E.R.N. Stack professional coding program. My github username is: emday4prez. My email address is listed in the 'Contact' section.
    </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Education</Accordion.Header>
   <Accordion.Body style={{fontWeight:'300', fontSize: '.85rem'}}>
    <ul>
      <li>
        <p><span id='eduTitle'>MIT </span> M.E.R.N. Stack Bootcamp</p>
      </li>
      <li>
        <p><span id='eduTitle'>University of Helsinki</span> Full Stack  Open</p>
      </li>
      <li>
        <p><span id='eduTitle'>The Odin Project</span> Full Stack JavaScript Developer</p>
      </li>
      <li>
        <p><span id='eduTitle'>Linux Foundation</span> Node Applications Developer</p>
      </li>
      <li>
        <p><span id='eduTitle'>Mongo DB University</span> Advanced C.R.U.D. Operations</p>
      </li>
      <li>
        <p><span id='eduTitle'>Codecademy</span> Algorithms & Data Structures</p>
      </li>
      <li><p>
      <span id='eduTitle'>Penn State University</span> Bachelor of the Art's Degree
      </p></li>
    </ul>
      
     

    </Accordion.Body>
  </Accordion.Item>
 
  <Accordion.Item eventKey="3" >
    <Accordion.Header>Social</Accordion.Header>
    <Accordion.Body >
     <Button style={{margin:'1rem', padding:'.6rem'}} variant="primary" href="http://www.github.com/emday4prez" target="blank">Github</Button>
     <Button style={{margin:'1rem', padding:'.6rem'}} variant="primary" href="https://www.linkedin.com/in/emerson-day-17106010/" target="blank">LinkedIn</Button>
     <Button style={{margin:'1rem', padding:'.6rem'}} variant="primary" href="https://www.hackerrank.com/emerson_day" target="blank">HakerRank</Button>
     <Button style={{margin:'1rem', padding:'.6rem'}} variant="primary" href="http://www.twitter.com/emers0n" target="blank">Twitter</Button>
      
    </Accordion.Body>
  </Accordion.Item>
   <Accordion.Item eventKey="4">
    <Accordion.Header>Contact</Accordion.Header>
    <Accordion.Body>
     <ul>
      <li>emerson.day@gmail.com</li>
      
     </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </div>
       <div className="bio-img">
      <Image src={profilePic} style={{maxHeight: '900px', maxWidth: '100%', padding:'2rem', borderRadius:'2.25rem'}} />
      </div>
    </div> 
  )
}

export default Bio