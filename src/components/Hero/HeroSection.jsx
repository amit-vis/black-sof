import { Button } from "../Button/Login";
import { Navbar } from "../Navbar/Navbar";
import "./HeroSection.css";

export const Hero = ()=>{
    return(
        <>
        <section className="hero-section">
        <hr className="minor-line"/>
            <div className="text-container">
                <p>Smart Lighting Solutions</p>
                <h1>Bringing A New Perspective To Street Ligts <br/>
                And The Cities Of Tomorrow.</h1>
                <div className="btn-container">
                <Button btn="Login"/>
                </div>
            </div>
        </section>
        </>
    )
}