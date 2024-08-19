import "./Products.css";
import ArrowIcon from "../../assets/icon_png.png";

export const Products = ()=>{
    return(
        <>
        <section className="products-section">
            <div className="pro-section-heading">
                <h5>Products</h5>
            </div>
            <h2 className="product-text"><b>Cutting-edge hardware,</b> offerings
            <br/>
            helping cities optimize resources and
            <br/>
            achieve smart development goals
            </h2>
            <div className="description-container">
                <div className="sub-description-container">
                    <span className="product-desc-text">Centralized Control & Monitoring System</span>
                </div>
                <div className="sub-description-container">
                    <span className="product-desc-text">NEMA-Mounted VOLC 1160</span>
                </div>
                <div className="sub-description-container">
                    <span className="product-desc-text">Retrofit Street Light Controller VOLC 2160</span>
                </div>
                <div className="sub-description-container">
                    <span className="product-desc-text">Retrofit Street Light Controller VOLC 2180</span>
                </div>
                <div className="sub-description-container">
                    <span className="product-desc-text">Retrofit Street Light Controller VOLC 4180</span>
                </div>
            </div>
            <div className="smart-light-container">
                <div className="smart-light-img-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlD1KIhRdZ30ox504XbU2FUo8LIm8oZz-WVaPyTFxFFSoP4xY" alt="smart-light" className="smart-light-img"/>
                    <p className="smart-light-img-container-text">
                    &#x1F890;
                    </p>
                </div>
                <div className="smart-light-text-container">
                    <small>Products 1/5</small>
                    <h2>Centralized Control &
                        <br/>
                        Monitoring System
                    </h2>
                    <p>Designed indigenously for street lighting projects,<br/>
                    the CCMS offers a complete feeder panel for a
                    <br/>
                    group of 30-50 street lights
                    </p>
                    <div className="arrow-icon-container">
                        <a href="#">Know More</a>
                        &nbsp;&nbsp;
                        <img src={ArrowIcon} alt="Arrow-icon"/>
                    </div>
                    <p className="smart-light-img-container-text-2">
                    &#x1F892;
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}