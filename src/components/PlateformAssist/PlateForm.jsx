import "./PlateForm.css";
import Icon2 from "../../assets/icon_png2.png";

export const PlateForm = ()=>{
    return(
        <>
        <section className="section-4">
            <h1 className="plateform-text">The platform assists city managers<br/>
            on multiple fronts
            </h1>
            <div className="plateform-power">
                <div className="first-platform-container">
                    <img src={Icon2} alt="icon2"/>
                    <h2>Saves on power<br/>
                    consumption &
                    <br/>
                    related costs
                    </h2>
                </div>
                <div className="horizontal-light"></div>
                <div className="first-platform-container-second">
                    <img src={Icon2} alt="icon2"/>
                    <h2>Lowers<br/>
                    downtimes
                    </h2>
                </div>
            </div>
            <div className="platform-detect-power">
                <div className="plateform-detect-first-cont">
                    <img src={Icon2} alt="icon-2"/>
                    <h2>Detects power<br/>
                    thefts.
                    </h2>
                </div>
                <div className="plateform-detect-second-cont">
                    <div>
                    <img src={Icon2} alt="icon-2"/>
                    <h2>Ensures smart<br/>
                    monitoring and control<br/>
                    of the street light<br/>
                    infrastructure
                    </h2>
                    </div>
                </div>
            </div>
            <div className="plateform-analytics-container">
                <div className="first-container">
                    <img src={Icon2} alt="icon-2"/>
                    <h2>Ensures real-time actionable<br/>
                    analytics on power failures, lamp<br/>
                    malfunctions, voltage &nbsp; failures,<br/>
                    etc.
                    </h2>
                </div>
                <div className="verticale-line"></div>
                <div className="second-container">
                    <img src={Icon2} alt="icon-2"/>
                    <h2>Ensures security in<br/>
                    the neighborhood<br/>
                    </h2>
                </div>
                <div className="new-vertical-line"></div>
            </div>
        </section>
        </>
    )
}