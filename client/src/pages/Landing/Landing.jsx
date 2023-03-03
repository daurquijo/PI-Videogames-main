import React from "react";
import { NavLink } from 'react-router-dom'
import Video from '../images/Room - 129836.mp4'
import './Landing.css'



const Landing = () => {
    return(
        <div className="mainContainer">
            <video src={Video} width="1920" height="1080" autoPlay loop muted></video>
            <NavLink to='/home'>
                <button className="video-button">
                    P L A Y
                    <div id="clip">
                        <div id="leftTop" className="corner"></div>
                        <div id="rightBottom" className="corner"></div>
                        <div id="rightTop" className="corner"></div>
                        <div id="leftBottom" className="corner"></div>
                    </div>
                    <span id="rightArrow" className="arrow"></span>
                    <span id="leftArrow" className="arrow"></span>
                </button>
            </NavLink>
        </div>
    )
}

export default Landing