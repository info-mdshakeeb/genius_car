import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
const Footer = () => {
    return (
        <div className="  bg-black 
        text-gray-400">
            <footer className="footer container mx-auto p-10 py-20">
                <div>
                    <img src={logo} alt="" />
                    <p>Edwin Diaz is a software and web  <br />
                        technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">Services</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">Why caR Doctor</Link>
                    <Link className="link link-hover">About</Link>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <Link className="link link-hover">Suppor center</Link>
                    <Link className="link link-hover"> policy</Link>
                    <Link className="link link-hover">Feet Back</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;