import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Heading (){
    return(
        <>
            <header>
            <div className="container">
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light toggleDarkonMobile">
                <a href="https://www.cardbaazi.com/" className="navbar-brand">
                    <img id="Logo" 
                     src="images/CardBaazi-Logo.svg"
                     alt="Cardbaazi" 
                     width="213" 
                     height="50" />
                </a>
                <button 
                    className="navbar-toggler third-button" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div class="animated-icon3">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            <div id="navbarSupportedContent" 
                 className="collapse navbar-collapse">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7JWW7G" 
                    height="0" 
                    width="0"
                    style={{display:"none", visibility:"hidden"}}>
                  </iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}


                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbarUL">
                    <li className="nav-item">
                        <a className="nav-link headerlinkGTA" 
                           href="https://www.cardbaazi.com/about-us">About
                        </a>
                    </li>
                    <li className="nav-item dropdown gamesNav">
                        <a className="nav-link dropdown-toggle" 
                            href="#" id="navbarDarkDropdownMenuLink" 
                            role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Games
                        </a>
                        <ul className="dropdown-menu cstm-dropdown-menu" 
                            aria-labelledby="navbarDarkDropdownMenuLink">
                            <div>
                                <li><a className="dropdown-item border-bottom headerlinkGTA"
                                       href="/rummy-card-game-online">Rummy</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/call-break-card-game-online">Call
                                        Break</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/dehla-pakad-card-game-online">Dehla
                                        Pakad</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/t-23-card-game-online">T-23 Game</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/51-pool-rummy-game-online">Pool 51 Rummy</a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item dropdown promotionsNav">
                        <a className="nav-link dropdown-toggle" 
                           href="#" 
                           id="navbarDarkDropdownMenuLink" 
                           role="button"
                           data-bs-toggle="dropdown" 
                           aria-expanded="false">
                            promotions
                        </a>
                        <ul className="dropdown-menu dropdown-menu" 
                            aria-labelledby="navbarDarkDropdownMenuLink">
                            <div>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/indian-card-festival">Indian card
                                        festival</a></li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/rummy-promotions">Rummy promotions</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/call-break-promotions/">Call break
                                        Promotions</a></li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/dehla-pakad-promotions/">Dehla pakad
                                        Promotions</a></li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/t23-promotions/">T23 Promotions</a>
                                </li>
                                <li><a className="dropdown-item headerlinkGTA" 
                                       href="/51-promotions/">Pool 51 Promotions</a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link headerlinkGTA" 
                           href="https://www.cardbaazi.com/how-to-install">Download</a></li>
                    <li className="nav-item">
                        <a className="nav-link headerlinkGTA" 
                           href="https://www.cardbaazi.com/contact">Contact Us</a></li>
                </ul>
                <div className="d-md-block d-none"><a
                        className="btn btn-primary btn-md buttonRadius ms-4 me-2 px-4"
                        href="https://dashboard.cardbaazi.com/register">SIGN UP</a> <a
                        className="btn btn-outline-primary btn-md buttonRadius px-4 loginbutton_gta"
                        href="https://dashboard.cardbaazi.com/login-credentials">LOGIN</a></div>
                </div>
                </nav>
                <div className="mx-auto text-center d-md-none d-block">
                    <a className="btn btn-primary btn-md buttonRadius ms-md-4 ms-lg-4 me-2 px-4"
                        href="https://dashboard.cardbaazi.com/register">SIGN UP</a> <a
                        className="btn btn-outline-primary btn-md buttonRadius px-4 btnLogin loginbutton_gta"
                        href="https://dashboard.cardbaazi.com/login-credentials">LOGIN</a>
                </div>
            </div>
        </header>
        </>
    );
}

export default Heading;