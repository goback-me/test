import React from "react";
import logo from "../Images/logo.png"
import "../components/header.css"

export default function Header(){
    return(<>
    <div className="header">
        <div className="header-container">
            <header id="main-header">
                <div className="logo-wrapper">
                    <div id="logo">
                      <img src={logo} alt="" />
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
                            </div>
                        </div>
                    </div>
                    <div className="login-container">
                        <div className="login-wrapper">
                            <ul className="main-login-wrap">
                                <li className="login-nav-item">
                                    Login
                                </li>
                                <li className="signup-nav-item">
                                    Sign up
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
    </>)
}