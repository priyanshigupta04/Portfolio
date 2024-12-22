import React from 'react';
import '../App.css';
import video from '../assets/assets/videoBg.mp4';


const VideoBackground = () => (
  <div className="video-bg">
    <video autoPlay muted loop>
      <source src= {video} type="video/mp4" />
    </video>
  </div>
);

export default VideoBackground;
