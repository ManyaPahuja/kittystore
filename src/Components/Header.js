import React, { } from 'react'

function Header() {
    return (
        <div className="main-navbar sticky-top">
            <nav className="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand ml-lg-5 ml-md-4 ml-sm-3" href="/">
                    <h4 className="brand-name">KiTTySTore </h4>
                    <p className = 'tagline'>only for girls</p>
                </a>
                <div className="collapse navbar-collapse flex-center" id="navbarText" >
                    <ul className="navbar-nav" style={{maxHeight:"40px",height:"40px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <li className="nav-item active" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link" style={{padding:"0px"}} href="/clothes/dresses">Clothes<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link" style={{padding:"0px"}} href="/footwear/sandals">Footwear</a>
                        </li>
                        <li className="nav-item" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link" style={{padding:"0px"}} href="/beauty">Skincare</a>
                        </li>
                        {/* <li className="nav-item" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link" style={{padding:"0px"}} href="/">SKIN</a>
                        </li> */}
                        {/* <li className="nav-item" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link" style={{padding:"0px"}} href="/partner">MAKEUP</a>
                        </li> */}
                    </ul>
                </div>
                <div className="login-options mr-lg-5 mr-md-4 mr-sm-3 navbar-right">
                    <ul className="navbar-nav mr-auto" style={{maxHeight:"40px",height:"40px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <li className="nav-item active" style={{minWidth:"60px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="nav-link login-btn-a" style={{}} href="/login">
                                Login
                            </a>
                        </li>
                        <li className="nav-item active" style={{minWidth:"60px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                            <a className="cart-a nav-link" style={{}} href="/ride">
                                <svg class="" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path class="_1b9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
                                </svg>
                                <span>Cart</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Header
