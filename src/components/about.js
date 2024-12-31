import React from 'react';
import '../App.css';
import studentImage from '../assets/assets/student.png';

const about = () => (
   <>

<div className="about">
        <h2><b>Know who <span>I'm</span></b></h2>
        <img  className="aboutImg" src= {studentImage} alt="hello"/>
        <div className="collect">

            <div className="quote">
                <p className="Pquote">"Fueled by <span className="highlight">coffee</span> inspired by <span
                        className="highlight">code</span> and uplifted by <span className="highlight">song</span> I create
                    with passion and joy."</p>
                <div className="line"></div>

                <div className="aboutExtra">
                    <div className="interest">
                        <h3>Interest</h3>
                        <div className="int int1">
                            Singing
                        </div>
                        <div className="int int2">
                            Coding
                        </div>
                        <div className="int int3">
                            Dancing
                        </div>
                        <div className="int int4">
                            Binge-watching
                        </div>

                    </div>
                    <div className="education">
                        <h3>Education</h3>


                        <div className="circle">
                            <div className="cir1">
                                <div className="cir"></div>
                                <div className="cirp">ITM SLS Baroda University<br/><span>BTech CSE (BATCH-2026)</span>
                                </div>
                            </div>
                            <div className="cir2">
                                <div className="cir"></div>
                                <div className="cirp">Urmi School<br/><span>Higher Secondary Scooling - 2020</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="abPara">
                <p className="Para">
                    Hello there! I'm Priyanshi Gupta, a passionate Third-year student pursuing a B.Tech in
                    Computer Science and Engineering at ITM SLS Baroda University.
                    Passionate about exploring the endless possibilities of web development, I bring a unique
                    blend of academic prowess and practical experience to the table.
                    <br/>
                    Currently serving as a web tech volunteer within the GDSC community, I actively contribute
                    to meaningful projects and collaborate with like-minded individuals. My portfolio is a testament
                    to my commitment to excellence, creativity, and a genuine love for crafting seamless digital
                    experiences.
                </p>
            </div>
        </div>


      </div>

      <div id="skills">
        <h2><b>Skills</b></h2>
        <br/>
        <div className="body">

            <div className="conteudo">
                <div className="carrousel">
                    <div className="cardtop">
                        <article className="card">
                            <h1>HTML5</h1>                                
                                <span className="skill-per html">
                                    <span className="tooltip">90%</span>
                                </span>
                            
                        </article>
                        
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>CSS3</h1>
                            <span className="skill-per css">
                                <span className="tooltip">70%</span>
                            </span>
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>Bootstrap</h1>
                            <span className="skill-per bootstrap">
                                <span className="tooltip">70%</span>
                            </span> 
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>JS</h1>
                            <span className="skill-per javascript">
                                <span className="tooltip">70%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>React JS</h1>
                            <span className="skill-per react">
                                <span className="tooltip">70%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>Java</h1>
                            <span className="skill-per java">
                                <span className="tooltip">85%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>C</h1>
                            <span className="skill-per c">
                                <span className="tooltip">60%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>Python</h1>
                            <span className="skill-per python">
                                <span className="tooltip">90%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>GIT</h1>
                            <span className="skill-per gitt">
                                <span className="tooltip">40%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>GitHub</h1>
                            <span className="skill-per github">
                                <span className="tooltip">80%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>PHP</h1>
                            <span className="skill-per php">
                                <span className="tooltip">60%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>Mysql</h1>
                            <span className="skill-per mysql">
                                <span className="tooltip">60%</span>
                            </span>                            
                        </article>
                    </div>
                    <div className="cardtop">
                        <article className="card">
                            <h1>Django</h1>
                            <span className="skill-per nodejs">
                                <span className="tooltip">65%</span>
                            </span>                            
                        </article>
                    </div>

                </div>
            </div>

        </div>

    </div>

   </>
);

export default about;
