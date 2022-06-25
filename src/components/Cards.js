import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import map from  '../assets/Map.png'
import pacMan from '../assets/pacmen-factory.gif'
import eyes from '../assets/eyes.png'
import ip from '../assets/ip2.png'
import memory from '../assets/memory.png'

function Cards() {
  return (
    <div className='card-container'>
     
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={map} />
        <Card.Body>
          <Card.Title>Real Time Bus Tracker</Card.Title>
          <Card.Text>
            Programmatically displaying bus stops on a map.
          </Card.Text>
            {/* <Card.Link href="https://emday4prez.github.io/RealTimeBusTracker/" target="blank">
            <Button  variant="primary">Live Site</Button>
          </Card.Link> */}
          <Card.Link  href="https://github.com/emday4prez/RealTimeBusTracker" target="blank">
            <Button variant="primary">Github Repo</Button>
          </Card.Link>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={pacMan} style={{height: '8rem', width: 'auto', paddingTop: '2rem', marginBottom: '4.6rem' }}/>
        <Card.Body>
          <Card.Title>PacMen Factory</Card.Title>
          <Card.Text>
            PacMan images are created and randomly move across the screen.
          </Card.Text>
          {/* <Card.Link href="https://emday4prez.github.io/PacMen/" target="blank">
            <Button variant="primary">Live Site</Button>
          </Card.Link> */}
          <Card.Link href="https://github.com/emday4prez/PacMen" target="blank">
            <Button variant="primary">Github Repo</Button>
          </Card.Link>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={eyes} />
        <Card.Body>
          <Card.Title>Moving Eyeballs</Card.Title>
          <Card.Text>
            Using CSS and JavaScript to make eyeballs follow the mouse cursor.
          </Card.Text>
          <Card.Link href="https://emday4prez.github.io/Eye-Exercise/" target="blank">
            <Button  variant="primary">Live Site</Button>
          </Card.Link>
          <Card.Link href="https://github.com/emday4prez/Eye-Exercise" target="blank">
            <Button  variant="primary">Github</Button>
          </Card.Link>
         
        </Card.Body>
      </Card>
       <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={ip} />
        <Card.Body>
          <Card.Title>IP Address Tracker</Card.Title>
          <Card.Text>
            Fetching IP Address data, and displaying the location on a map.
          </Card.Text>
            {/* <Card.Link href="https://emday4prez.github.io/RealTimeBusTracker/" target="blank">
            <Button  variant="primary">Live Site</Button>
          </Card.Link> */}
          <Card.Link  href="https://github.com/emday4prez/ip-address-tracker" target="blank">
            <Button variant="primary">Github Repo</Button>
          </Card.Link>
          
        </Card.Body>
      </Card>
       {/* <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={memory} />
        <Card.Body>
          <Card.Title>Memory Match</Card.Title>
          <Card.Text>
            A game made with React hooks.
          </Card.Text>
          <Card.Link  href="https://emday4prez.github.io/memories/" target="blank">
            <Button variant="primary">Live Site</Button>
          </Card.Link>
          
        </Card.Body>
      </Card> */}
    </div>
   
  )
}

export default Cards