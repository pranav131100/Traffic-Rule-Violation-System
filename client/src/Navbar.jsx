import React from 'react'
import "./Navbar.css"


import { Link,useRouteMatch } from 'react-router-dom';
const Navbar = () => {
    const {url} = useRouteMatch();
    return (
       
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#"><b>Traffic Rule Violation System</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <span style = {{width :"55vw"}}></span>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className = "NavLinks" to={`${url}`}>
                                        <a className="nav-link active" aria-current="page" href="/#"><span className = "spanClass">Home</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className = "NavLinks" to={`${url}/logout`}>
                                        <a className="nav-link active" aria-current="page" href="/#"><span className = "spanClass">Sell</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className = "NavLinks" to={`${url}/about`}>
                                        <a className="nav-link active" aria-current="page" href="/#"><span className = "spanClass">About</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className = "NavLinks" to={`${url}/contact`}>
                                        <a className="nav-link active" aria-current="page" href="/#"><span className = "spanClass">Contact</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className = "NavLinks" to='/profile'>
                                        <a className="nav-link active" aria-current="page" href="/#"><span className = "spanClass">Profile</span></a>
                                    </Link>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        )
    
}

export default Navbar;