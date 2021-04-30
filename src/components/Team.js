import React from 'react'
import Oemer from '../images/oemer.png'
import Carole from '../images/carole.jpg'
import Matthias from '../images/PictureMatthias.jpg'


import './Team.css'

function Team() {

    return (

        <section className='aboutSection'>
            <div className="container">
                <h1 className="heading">Meet the Team</h1>
                <div className="card-wrapper">
                    <div className="card">
                        <img src={Carole}></img>
                        <h1>Carole Oulato</h1>
                        <p className="about">
                        Full Stack Developer <br/>
                        <a target='_blank' href='https://github.com/Carole91'>GitHub</a>
                    </p>

                    </div>
                    <div className="card">
                        <img src={Matthias}></img>
                        <h1>Matthias Schmettow</h1>
                        <p className="about">
                        Full Stack Developer <br/>
                        <a target='_blank' href='https://github.com/MatthiasvsGitHub'>GitHub</a>
                    </p>

                    </div>
                    <div className="card">
                        <img src={Oemer}></img>
                        <h1>Ömer Ügür</h1>
                        <p className="about">
                        Full Stack Developer <br/>
                        <a target='_blank' href='https://github.com/OemerUeguer'>GitHub</a>
                    </p>

                    </div>
                </div>
            </div>
        </section>

    )
};

export default Team;
