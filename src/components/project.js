import React from 'react';
import '../App.css';
import calcyImage from '../assets/assets/calcyProject.png';
import monitorImage from '../assets/assets/monitoring.png';
import pmImage from '../assets/assets/PMProject.jpeg';


const project = () => (
   <>
   <div className="project">

<h2>My Recent <span>Projects</span></h2>

<div className="grid-container">
  <div className="card">
      <img src={calcyImage} alt="Project 1" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 1: A revolutionary app that simplifies task management.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project1" className="btn btn-github">GitHub</a>
              <a href="https://demo.project1.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={pmImage} alt="Project 2" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 2: An innovative solution for real-time data visualization.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project2" className="btn btn-github">GitHub</a>
              <a href="https://demo.project2.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={monitorImage} alt="Project 3" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 3: A cutting-edge machine learning model for image recognition.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project3" className="btn btn-github">GitHub</a>
              <a href="https://demo.project3.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={monitorImage} alt="Project 4" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 4: An efficient algorithm for optimizing network traffic.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project4" className="btn btn-github">GitHub</a>
              <a href="https://demo.project4.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={monitorImage} alt="Project 5" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 5: A user-friendly interface for managing complex databases.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project5" className="btn btn-github">GitHub</a>
              <a href="https://demo.project5.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
  <div className="card">
      <img src={monitorImage} alt="Project 6" className="card-image"/>
      <div className="card-content">
          <p className="card-description">Project 6: An advanced encryption system for secure communication.</p>
          <div className="card-buttons">
              <a href="https://github.com/yourusername/project6" className="btn btn-github">GitHub</a>
              <a href="https://demo.project6.com" className="btn btn-demo">Demo</a>
          </div>
      </div>
  </div>
</div>

</div>
   </>
);

export default project;
