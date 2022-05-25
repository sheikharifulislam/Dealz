import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import banner from "../../../../assets/images/offerBanner.png";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSearchBox from "./HeaderSearchBox";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const openMobileMenu = () => {
        setMobileMenu(true);
    };
    const closeMobileMenu = () => setMobileMenu(false);
    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className="relative bg-slate-800 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex gap-3 justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start">
                        <Link to="/">
                            <span className="sr-only">Logo</span>
                            <img
                                className="h-10 w-auto sm:h-14"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={openMobileMenu}
                        >
                            <FiMenu size={30} />
                        </button>
                    </div>
                    {/* search */}
                    <HeaderSearchBox />
                    {/* profile section */}
                    <div className="md:flex gap-3 items-center justify-end hidden">
                        <AiOutlineShoppingCart className="text-white w-6 h-6 cursor-pointer" />
                        <div className="ml-3 relative">
                            <FaUserAlt
                                className=" text-white w-6 h-6 cursor-pointer"
                                size={30}
                                onClick={toggleProfile}
                            />
                            {/* Profile dropdown */}
                            <ProfileDropdown
                                showProfile={showProfile}
                                toggleProfile={toggleProfile}
                            />
                        </div>

                        {/* header banner image */}
                        <div>
                            <img src={banner} className="h-10" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <HeaderMobileMenu
                mobileMenu={mobileMenu}
                closeMobileMenu={closeMobileMenu}
            />
        </div>
    );
};

export default Header;
