import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import profilePic from '../assets/emerson.png'
function Bio() {
  return (
    <div className='bio-container'>
     <div className="bio-img">
      <Image src={profilePic} roundedCircle />
     </div>
     <div className="bio-info">
      <p>info</p>
      <p>more info</p>
     </div>
    </div>
  )
}

export default Bio