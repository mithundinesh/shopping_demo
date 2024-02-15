import React from "react";
import Logo from "../assets/logo.svg";


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="item">
                <div className="header">
                    <img src={Logo} style={{ width: 30, marginRight: 10 }} /> Site Name
                </div>
                <div className="sub-items">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div className="item">
                <div className="header">Customer Support</div>
                <div className="sub-items">
                    <div className="element">
                        Returns & Warranty
                    </div>
                    <div className="element">
                        Payments
                    </div>
                    <div className="element">
                        Shipping
                    </div>
                    <div className="element">
                        Terms and contitions
                    </div>
                    <div className="element">
                        Privacy policy
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="header">Corporat Info</div>
                <div className="sub-items">
                    <div className="element">
                        About us
                    </div>
                    <div className="element">
                        Brands
                    </div>
                    <div className="element">
                        Investors
                    </div>
                    <div className="element">
                        Cookies
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="header">Gift Card</div>
                <div className="sub-items">
                    <div className="element">
                        Buy Gift cards
                    </div>
                    <div className="element">
                        Redeem Card
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="header">Location</div>
                <div className="sub-items">
                    <div className="element">
                        United State
                    </div>
                </div>
            </div>
        </div>
    );
}
