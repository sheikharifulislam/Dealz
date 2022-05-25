import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch, BsXLg } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import banner from "../../../assets/images/offerBanner.png";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(true);
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
                            onClick={() => setMobileMenu(true)}
                        >
                            <FiMenu size={30} />
                        </button>
                    </div>
                    {/* search */}
                    <div className=" md:ml-5 flex-1 hidden md:block">
                        <form className="flex relative">
                            <input
                                type="search"
                                placeholder="Search In Dealz"
                                className="border w-full py-3 pl-4 outline-none bg-[#f5f5f5] rounded-sm"
                            />

                            <button
                                type="submit"
                                className="absolute top-0 right-0 bg-[#F57224] px-4 py-[17px] rounded-sm"
                            >
                                <BsSearch />
                            </button>
                        </form>
                    </div>
                    {/* profile */}
                    <div className="md:flex gap-3 items-center justify-end hidden">
                        {/* profile icons */}
                        <AiOutlineShoppingCart className="text-white w-6 h-6 cursor-pointer" />
                        {/* <!-- Profile dropdown --> */}
                        <div className="ml-3 relative">
                            <div>
                                <button
                                    type="button"
                                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                                    onClick={toggleProfile}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

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
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-0"
                                >
                                    Your Profile
                                </Link>

                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-1"
                                >
                                    Settings
                                </Link>

                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="user-menu-item-2"
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src={banner} className="h-10" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div
                className={`${
                    mobileMenu
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                            </div>
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
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                {" "}
                                Sign up{" "}
                            </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-500"
                                >
                                    {" "}
                                    Sign in{" "}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
