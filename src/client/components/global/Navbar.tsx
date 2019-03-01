import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary p-3 mb-5">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-primary ml-3" style={{ fontWeight: 'bold' }}>
                    <img src='images/myLogo.png' className="d-inline-block align-top mx-auto" width="40" height="40"></img>
                </a>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active mr-5">
                        <Link
                            className="nav-link text-primary"
                            style={{ fontWeight: 'bold' }}
                            activeClass='active'
                            to='Home'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link 
                            to='About' 
                            className="nav-link text-primary" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ fontWeight: 'bold' }}>About</Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link 
                            to='gallery' 
                            className="nav-link text-primary"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            style={{ fontWeight: 'bold' }}>Gallery</Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link 
                            to='Footer' 
                            className='nav-link text-primary' 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ fontWeight: 'bold' }}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;