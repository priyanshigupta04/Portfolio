import React from 'react';
import '../App.css';
import MediImage from '../assets/assets/MediRemind.jpg';
import musicImage from '../assets/assets/musicPlay.png';


const project = () => (
   <>
   <div className="project">

<h2>My Recent <span>Projects</span></h2>

<div className="grid-container">
<div className="card">
      <img src={MediImage} alt="Project 2" className="card-image"/>
      <div className="card-content">
          <p className="card-description">The <b>Medicine Reminder</b> App is a web application built with React, HTML, and CSS to help users track medication intake with timely reminders.</p>
          <div className="card-buttons">
              <a href="https://github.com/priyanshigupta04/MediRemind.git" className="btn btn-github">GitHub</a>
              <a href="https://medi-remind.vercel.app/" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={musicImage} alt="Project 1" className="card-image"/>
      <div className="card-content">
          <p className="card-description">This <b>Music Player</b> project, built with Python and Django, lets users listen to songs, create, and manage playlists with a user-friendly interface.
          </p>
          <div className="card-buttons">
              <a href="https://github.com/priyanshigupta04/musicPlay" className="btn btn-github">GitHub</a>
              <a href="https://musicplay-sox5.onrender.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  
</div>

</div>
   </>
);

export default project;
