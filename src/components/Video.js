import React from 'react'
import ReactPlayer from "react-player"
import video1 from '../assets/intro.mp4'


function Video() {
  return (
    <div className='player-wrapper' >
     {/* <video src={video1} width="600" height="300" controls="controls" autoplay="true" /> */}
      <ReactPlayer 
        url="https://youtu.be/dqZXWl_OJJE"
        width='300px'
        height='350px'
       className='react-player'
      />
    </div>
  )
}

export default Video