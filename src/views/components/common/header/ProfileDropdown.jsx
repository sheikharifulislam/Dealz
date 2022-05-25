import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ showProfile }) => {
    return (
        <div
            className={`${
                showProfile
                    ? "transform opacity-100 scale-100 translate-y-0"
                    : "transform opacity-0 scale-95 translate-y-3 pointer-events-none"
            } transition ease-in duration-300 origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
            <Link
                to="/"
                className="navlink"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
            >
                Sign Up
            </Link>
            <Link
                to="/"
                className="navlink"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
            >
                Sign In
            </Link>
            <Link
                to="/"
                className="navlink"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
            >
                Dashboard
            </Link>

            <Link
                to="/"
                className="navlink"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
            >
                Sign out
            </Link>
        </div>
    );
};

export default ProfileDropdown;
