import React from 'react';
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

const FooterMain = () => {
    return (
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
                <span className="mx-auto mb-14 block h-10 w-24 rounded-lg lg:ml-0">
                    <img src={logo} alt="logo" />
                </span>

                <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium natus quod eveniet aut perferendis distinctio
                    iusto repudiandae, provident velit earum?
                </p>

                <div className="mt-6 flex justify-center gap-4 text-gray-300 lg:justify-start">
                    <NavLink className="footer-icon" to="/">
                        <span className="sr-only"> Facebook </span>
                        <BsFacebook size={22} />
                    </NavLink>

                    <NavLink className="footer-icon" to="/">
                        <span className="sr-only"> Instagram </span>
                        <BsInstagram size={22} />
                    </NavLink>

                    <NavLink className="footer-icon" to="/">
                        <span className="sr-only"> Twitter </span>
                        <BsTwitter size={22} />
                    </NavLink>

                    <NavLink className="footer-icon" to="/">
                        <span className="sr-only"> You Tube </span>
                        <BsYoutube size={25} />
                    </NavLink>

                    <NavLink className="footer-icon" to="/">
                        <span className="sr-only"> LinkedIn </span>
                        <BsLinkedin size={22} />
                    </NavLink>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                <div>
                    <strong className="text-sm font-bold uppercase tracking-wide text-white">
                        Services
                    </strong>

                    <nav className="footer-nav">
                        <NavLink className="footer-navLink" to="/">
                            Marketing
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Graphic Design
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            App Development
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Web Development
                        </NavLink>
                    </nav>
                </div>

                <div>
                    <strong className="text-sm font-bold uppercase tracking-wide text-white">
                        About
                    </strong>

                    <nav className="footer-nav">
                        <NavLink className="footer-navLink" to="/">
                            About
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Careers
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            History
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Our Team
                        </NavLink>
                    </nav>
                </div>

                <div>
                    <strong className="text-sm font-bold uppercase tracking-wide text-white">
                        Support
                    </strong>

                    <nav className="footer-nav">
                        <NavLink className="footer-navLink" to="/">
                            FAQs
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Contact
                        </NavLink>
                        <NavLink className="footer-navLink" to="/">
                            Live Chat
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;
