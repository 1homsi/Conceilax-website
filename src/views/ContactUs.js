import React from 'react';
import '../css/Contactus.css';
import { openInNewTab } from '../Functions';
import Whatsapp from '../Images/wts.png';
import Phone from '../Images/Phone.svg';
import Mail from '../Images/Mail.svg';
import Instagram from '../Images/ins.png'
import { Link } from 'react-router-dom';

export default function ContactUs() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>How To Conatct Us?</h1>
            <div className="MarginAtTheTop"></div>
            <div className="conatiner">
                <div className="wrapper">
                    <div className="card front-face">
                        <img src={Phone} alt="">
                        </img>
                    </div>
                    <div className="card back-face">
                        <i className="fas fa-phone-square fa-7x"></i>
                        <div className="info">
                            <div className="title">Phone Numbers</div>
                        </div>
                        <ul>
                            <Link to="/num"><button><i className="fas fa-phone"></i></button></Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card front-face">
                        <img src={Mail} alt="">
                        </img>
                    </div>
                    <div className="card back-face">
                        <i className="far fa-envelope fa-7x"></i>
                        <div className="info">
                            <div className="title">Email Us</div>
                        </div>
                        <ul>
                            <Link to="/em"><button><i className="far fa-envelope"></i></button></Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card front-face">
                        <img src={Instagram} alt="">
                        </img>
                    </div>
                    <div className="card back-face">
                        <i className="fab fa-instagram fa-7x"></i>
                        <div className="info">
                            <div className="title">Instagram</div>
                        </div>
                        <ul>
                            <button onClick={() => openInNewTab("https://www.instagram.com/conceilax/")}><i className="fab fa-instagram"></i></button>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card front-face">
                        <img src={Whatsapp} alt="">
                        </img>
                    </div>
                    <div className="card back-face">
                        <i className="fab fa-whatsapp-square fa-7x"></i>
                        <div className="info">
                            <div className="title">Whatsapp</div>
                        </div>
                        <ul>
                            <Link to="/comingsoon"><button><i className="fab fa-whatsapp"></i></button></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="MarginBottomForMobile"></div>
        </div>
    )
}
