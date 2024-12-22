import React from 'react';
import '../App.css';
import desktopImage from '../assets/assets/desktop.png';
import monitorImage from '../assets/assets/monitoring.png';



const home = () => (
  <>
  <div className="detail">
    <div className="TextPart">
      <h1>Hi, I am Priyanshi <span>Gupta</span></h1>
      <p>
        Welcome to my digital playground! I am a dedicated
        web developer with a flair for crafting immersive online experiences.
        This is my Portfolio website to show all details and work experience in web development.
      </p>
    </div>
    <img src= {desktopImage} alt="Priyanshi Gupta, Web Developer" />
  </div>


  <div class="info">
    <div>
        <img src={monitorImage}  className="infoImg" alt="hello"/>
    </div>
    <div class="intro">
        <h1>LET ME INTRODUCE MYSELF</h1>
        <pre class="Pquote">"Fueled by <span class="highlight">coffee </span> inspired by <span
    class="highlight">code </span> and uplifted by <span class="highlight">song  </span>I create
    with passion and joy."</pre>
        <pre class="Pquote">I fell in love with programming and I have at 
    least learnt something, I think…<pre>Fluent in the languages of Python, C, and JavaScript,I bring ideas to 
    life through code. </pre>Off the screen, I find my rhythm and harmony in 
    singing, where passion meets expression.
    </pre>
    </div>
 </div>
  </>
);

export default home;
