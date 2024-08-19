import "./Footer.css";
import Logo from "../../assets/smart lights_logo.svg";

export const Footer = ()=>{
    return(
        <>
        <section className="section-5">
            <div className="footer-container">
                <div>
                <img src={Logo} alt="smart-light"/>
                </div>
                <div className="list-container">
                <ul>
                    <li>
                        <p>Product</p>
                    </li>
                    <li>
                        <p>Software Services</p>
                    </li>
                    <li>
                        <p>Follow Us</p>
                    </li>
                </ul>
                </div>
            </div>
            <div className="line-footer"></div>
            <div className="footer-text">
                <div>
                    <p>Privacy Policy</p>
                </div>
                <div className="term-container">
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </section>
        </>
    )
}