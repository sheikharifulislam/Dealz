import React from "react";
import { BsXLg } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const HeaderMobileMenu = ({ mobileMenu, closeMobileMenu }) => {
    return (
        <div
            className={`${
                mobileMenu
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 pointer-events-none"
            } absolute top-0 inset-x-0 p-2 transition transform origin-top-right mt-4 md:hidden`}
        >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div className="-mr-2">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={closeMobileMenu}
                            >
                                <span className="sr-only">Close menu</span>
                                <BsXLg />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                    <div>
                        <ul>
                            <li className="text-lg font-serif leading-8">
                                <NavLink to="/" className="navlink">
                                    Sign Up
                                </NavLink>
                                <NavLink to="/" className="navlink">
                                    Sign IN
                                </NavLink>
                                <NavLink to="/" className="navlink">
                                    Dashboard
                                </NavLink>
                                <NavLink to="/" className="navlink">
                                    Sign Out
                                </NavLink>
                            </li>
                        </ul>
                        {/* <Link
                            to="/"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            {" "}
                            Sign up{" "}
                        </Link>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?
                            <Link
                                to="/"
                                className="text-indigo-600 hover:text-indigo-500"
                            >
                                {" "}
                                Sign in{" "}
                            </Link>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobileMenu;
