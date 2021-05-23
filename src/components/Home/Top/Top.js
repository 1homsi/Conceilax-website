import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import MainSvg from "../../../Images/StaticWeb.svg";
import ImageSecond from "../../../Images/Image2.svg";
import Service from '../../../Images/Services.svg';


export default function Top() {
    return (
        <div>
            <div className="main">
                <div className="main__container">
                    <div className="main__content">
                        <h1>Do you have a website?</h1>
                        <h2>No yet?</h2>
                        <p>What are you waiting for?</p>
                        <Link to="/contact-us"><button className="main__btn">Get Started</button></Link>
                    </div>
                    <div className="main__img--container">
                        <img id="main__img" src={MainSvg} alt=""/>
                    </div>
                </div>
                <h1 style={{textAlign:"center"}} className="TextAtTheTop">Examples</h1>
                <div className="main__container">
                    <div className="main__img--container">
                        <img id="main__img" src={Service} alt="" />
                    </div>
                    <div className="main__content">
                        <h1>Check Our Websites Out</h1>
                        <br/>
                        <p>Let me tell you a secret you'll love the design!</p>
                        <br/><br/>
                        <Link to="/website-exmaples"><button className="main__btn">Examples</button></Link>
                    </div>
                </div>
                <h1 style={{textAlign:"center"}} className="TextAtTheTop_Two">Why Us?</h1>
                <div className="main__container">
                    <div className="main__content">
                        <h1>Why choose us?</h1>
                        <h2>We'll keep it simple<br></br> check out the reasons.</h2>
                        <Link to="/why-us"><button className="main__btn">Why!</button></Link>
                    </div>
                    <div className="main__img--container">
                        <img id="main__img" src={ImageSecond} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
