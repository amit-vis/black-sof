import "./Ecosystem.css";
import streetlightlogo from "../../assets/street_light_controler.png";
import gateway from "../../assets/gateway_png.png";
import cloudlogo from "../../assets/cloud_based management.png";
import userslogo from "../../assets/users_png.png"
import Evolutionlogo from "../../assets/evaluation_png.png";


export const EcoSyatem = () => {
    return (
        <>
            <section className="ecosystem-container">
                <div className="section-heading">
                    <h5>Ecosystem</h5>
                </div>
                <h2 className="eco-text">How does a smart street
                    <br />light ecosystem work?
                </h2>
                <div className="eco-system-container">
                    <div>
                        <div className="streetlight-main-conatiner">
                            <div className="streetlight-border-conatiner">
                                <div className="street-light-img-conatainer">
                                    <img src={streetlightlogo} alt="street-light-container" />
                                </div>
                            </div>
                            <div className="streetlight-border-conatiner">
                                <div className="street-light-img-conatainer">
                                    <img src={streetlightlogo} alt="street-light-container" />
                                </div>
                            </div>
                        </div>
                        <div className="street-light-text-container">
                            <p className="street-light-head">Street Light Container</p>
                            <p className="street-light-desc">Activates/deactivates in response to
                                <br />
                                motion/light sensing and controls the
                                <br />
                                brightness of street lamp
                            </p>
                        </div>
                    </div>
                    <div className="line-beween"></div>
                    <div className="gateway-container">
                        <div className="gateway-border-container">
                            <div className="gateway-logo-container">
                                <img src={gateway} alt="gateway" />
                            </div>
                        </div>
                        <div className="street-light-text-container">
                            <p className="street-light-head">Gateway</p>
                            <p className="street-light-desc">Employed for interfacing between a
                                <br />
                                Controller and the Lighting
                                <br />
                                Management Software
                            </p>
                        </div>
                    </div>
                    <div className="line-between-gateway"></div>
                    <div className="gateway-container cloud-container">
                        <div className="gateway-border-container">
                            <div className="gateway-logo-container">
                                <img src={cloudlogo} alt="gateway" />
                            </div>
                        </div>
                        <div className="street-light-text-container">
                            <p className="street-light-head">Cloud-based<br />Management System</p>
                            <p className="street-light-desc">Collects information
                                <br />
                                from multiple gateways.
                            </p>
                        </div>
                    </div>
                    <div className="line-after-cloud"></div>
                    <div className="line-of-below-container"></div>
                </div>
                <div className="below-container">
                    <div className="sub-below-container">
                        <div>
                            <div className="gateway-border-container">
                                <div className="gateway-logo-container">
                                    <img src={userslogo} alt="gateway" />
                                </div>
                            </div>
                            <div className="street-light-text-container">
                                <p className="street-light-head">Users</p>
                                <p className="street-light-desc">Data from the cloud is used to
                                    <br />
                                    monitor and control street lights
                                    <br />
                                    by the System Managers
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="gateway-border-container">
                                <div className="gateway-logo-container">
                                    <img src={Evolutionlogo} alt="gateway" />
                                </div>
                            </div>
                            <div className="street-light-text-container">
                                <p className="street-light-head">Evaluation</p>
                                <p className="street-light-desc">Gathered insights are used
                                    <br />
                                    to evaluate the performance
                                    <br />
                                    of the lighting systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}