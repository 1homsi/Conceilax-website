import React from 'react';
import './Services.css'

export default function Serv() {
    return (
        <div>
            <div className="services-section">
                <div className="inner-width">
                    <div className="border"></div>
                    <div className="services-container">

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <div className="service-title">Web Designs</div>
                            <div className="service-desc">
                                We are ready to design any webiste you dream of.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="service-title">Front-End</div>
                            <div className="service-desc">
                                We don't only offer Front-End catchy designs but we also offer fast and secure backEnd.
                        </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-brush"></i>
                            </div>
                            <div className="service-title">Responsive Designs</div>
                            <div className="service-desc">
                                We don't create a webiste unless its fully Responsive.
                        </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-object-ungroup"></i>
                            </div>
                            <div className="service-title">Game dev</div>
                            <div className="service-desc">
                                We develope all sorts of 2 games using the Unity or Godot game engine. 
                        </div>
                        </div>
                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <div className="service-title">Databases</div>
                            <div className="service-desc">
                                We offer fast and cheap Hosting for webistes and any sorts of hosting needed.
                        </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="service-title">Android</div>
                            <div className="service-desc">
                                Android Dev using React-Native (cross-platform), Xamrin or Kotlin
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
