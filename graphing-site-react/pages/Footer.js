import React from 'react';
import './Everything.css';

function Footer() {
    return (
        <footer className="foot">
            {/* <!container for the footer of the website> */}
            
                <span className="footerHead">
                    <h1>About Us</h1>
                    <a className="footerLink">Terms of Service</a>
                    <br />
                    <a className="footerLink">Privacy Policy</a>
                </span>
                <span className="footerHead">
                    <h1>Contact Us</h1>
                    <a className="footerLink">Click here!</a>
                </span>
                <span class="footerHead">
                    <h1>Social Media</h1>
                    <a className="footerLink" href="https://www.linkedin.com/in/tuhina-das-722217255/"
                        target="_blank">LinkedIn - Tuhina</a>
                    <br />
                    <a className="footerLink" href="https://www.linkedin.com/in/juliet-glenn-4879b6280/" target="_blank">LinkedIn - Juliet</a>
                </span>
            
            
        </footer>
    
        );
}
export default Footer;