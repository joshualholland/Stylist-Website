import * as React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

let scrollToTop = () => {
    scroll.scrollToTop();
}

const Footer = () => {
    return (
        <footer className='footer bg-secondary'>
            <div className='text-center'>
                <i className='text-center' onClick={(e) => scrollToTop()}><FontAwesomeIcon className='text-primary' icon={faAngleDoubleUp} size='lg' /></i>
            </div>
            <div className='text-left contact'>
                <h5 className='text-primary mb-0'>Contact</h5>
                <p className='text-primary mb-0'>Morgan Ashley Salon:</p>
                <p className='text-primary mb-0'><span><FontAwesomeIcon icon={faPhone} size='lg' /></span>: (205) 995-2480</p>
                <p className='text-primary mb-0'>7350 Cahaba Valley Rd, Birmingham, AL 35242</p>
                <p className='text-primary mb-0'>Hours: M-F: 8am - 8pm, Sat. 9am - 4pm, closed Sun.</p>
            </div>
        </footer>
    )
};

export default Footer;