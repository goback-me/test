import React from "react";
import logo from "../Images/logo.png"
import '../CSS/BlogPage.css'
import mobileMenuOpen from "../Images/download.png" 
import mobileMenuClose from "../Images/download (1).png"

export default function Header(){

function mobileNavopen(){
    let mobileOpenIcon = document.querySelector('.mobile-menu-open');
    let mobileCloseIcon = document.querySelector('.mobile-menu-close');
    let mainMobileMenu = document.querySelector('.nav-wrapper');

    console.log(mobileOpenIcon);
    mobileOpenIcon.setAttribute("aria-hidden", "true")
    mobileCloseIcon.setAttribute("aria-hidden", "false")

    mainMobileMenu.classList.add("mobile-menu-show")
    mainMobileMenu.classList.remove("mobile-menu-hide")
}

function mobileNavClose(){
    let mobileOpenIcon = document.querySelector('.mobile-menu-open');
    let mobileCloseIcon = document.querySelector('.mobile-menu-close');
    let mainMobileMenu = document.querySelector('.nav-wrapper');

    console.log(mobileOpenIcon);
    mobileOpenIcon.setAttribute("aria-hidden", "false")
    mobileCloseIcon.setAttribute("aria-hidden", "true")

    mainMobileMenu.classList.add("mobile-menu-hide")
    mainMobileMenu.classList.remove("mobile-menu-show")
}
    return(<>
    <div className="header">
        <div className="header-container">
            <header id="main-header">
                <div className="logo-wrapper">
                    <div id="logo">
                      <img src={logo} alt="" />
                    </div>
                </div>
                <div className="nav-wrapper">
                        <div className="nav-container">
                            <div className="main-container">
                                <nav className="website-main-nav">
                                <ul className="nav-wrap">
                                    <li className="nav-item-wrap">
                                        Products
                                    </li>
                                    <li className="nav-item-wrap">
                                        Solution
                                    </li>
                                    <li className="nav-item-wrap">
                                        Developers
                                    </li>
                                    <li className="nav-item-wrap">
                                        Pricing
                                    </li>
                                    <li className="nav-item-wrap">
                                        Company
                                    </li>
                                </ul>
                                </nav>
                                <div className="login-container">
                        <div className="login-wrapper">
                            <div className="main-login-wrap">
                                <div className="login-nav-item">
                                    Login
                                </div>
                                <div style={{border:' 0.2px solid #727272'}}></div>
                                <div className="signup-nav-item">
                                    Sign up
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="header-cta">
                        <div className="header-cta-container">
                            <button className="header-cta-button">
                                <a href="#contact-us">Talk To Us</a>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-menu-toggle">
                        <div className="mobile-menu-open" aria-hidden="false">
                    <img src={mobileMenuOpen} alt="" onClick={mobileNavopen}/>
                        </div>
                        <div className="mobile-menu-close" aria-hidden="true">
                    <img src={mobileMenuClose} alt="" onClick={mobileNavClose} />
                        </div>
                    </div>
            </header>
        </div>
    </div>
    </>)
    }