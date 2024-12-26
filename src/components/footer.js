import React from 'react'
import '../App.css';
import emailImage from '../assets/assets/email_img.png';
import instaImage from '../assets/assets/insta_img.png';
import gitImage from '../assets/assets/github_img.png';
import linkImage from '../assets/assets/linkdin_img.png';



export default function footer() {
  return (
    <div>
      <div id="contact">
        <h2><b>FIND ME ON</b></h2>
        <h5>Feel free to connect with me</h5>
    
        <div class="SocialLinks">
          <div class="email">
            <a href="mailto:prigupta124@gmail.com"><img src={emailImage} alt="Email" /></a>
          </div>
    
          <div class="insta">
            <a href="https://www.instagram.com/priyanshigupta_124"><img src= {instaImage} alt="Insta"/></a>
          </div>
    
          <div class="git">
            <a href="https://github.com/priyanshigupta04"><img src= {gitImage} alt="Github"/></a>
          </div>
    
          <div class="link">
            <a href="https://www.linkedin.com/in/priyanshi-gupta-624772288"><img src= {linkImage} alt="LinkedIn"/></a>
          </div>
        </div>
    
        <h4 style={{ textAlign: 'center', color: 'gray' }}>
  @All Rights Are Reserved by PG
</h4>

      </div>
    </div>
  )
}
