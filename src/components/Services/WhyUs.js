import React from 'react'
import './Services.css'

export default function WhyUs() {
    return (
        <div>
            <div className="services-section">
                <div className="inner-width">
                    <div className="border"></div>
                    <div style={{ marginBottom: "10%" }}></div>
                    <div className="services-container">
                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <div className="service-title">Cheap Prices</div>
                            <div className="service-desc">
                                We know the web Debelopment market is massive <br></br>
                                and the prices can varry, and since we  care for the customer we offer cheap prices that and even discounts.
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="service-title">Fast and clean designs</div>
                            <div className="service-desc">
                                We are not like others when we promise the customer fast services and amazing desings we delvier.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <i className="fas fa-brush"></i>
                            </div>
                            <div className="service-title">Superior Customer Support</div>
                            <div className="service-desc">
                                At conceilax we believe that customers come first. for exmaple if you don't
                                like the desing we will redesign it for you. Ofcourse that is after offering
                                a mockup of the website before desinging it.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "5%" }}></div>
        </div>
    )
}
