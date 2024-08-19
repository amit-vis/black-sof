import "./Navbar.css";
import logo from "../../assets/smart lights_logo.svg"
import { Button } from "../Button/Login";
import { useState } from "react";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("It's togling")
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-container">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        &#9776; {/* This represents a hamburger icon */}
                    </button>
                    <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Product</a>
                        </li>
                        <li>
                            <a href="">Sofware Services</a>
                        </li>
                        <li>
                            <Button fontWght="fw-bold" btn="Login"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


