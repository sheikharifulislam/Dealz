import React, { useRef } from "react";
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import offerBanner from "../../../assets/images/offerBanner.png";

const Header = () => {
    const mMenuRef = useRef(null);

    const showMobileMenu = () => {
        mMenuRef.current.classList.remove("right-[-500px]");
        mMenuRef.current.classList.add("right-0");
    };

    const closeMobileMenu = () => {
        mMenuRef.current.classList.remove("right-0");
        mMenuRef.current.classList.add("right-[-500px]");
    };

    return (
        <>
            <div className="w-[100%] md:px-8 flex flex-row items-center justify-between  bg-slate-800 ">
                <div className="md:w-[10%] w-[25%]">
                    <img src={logo} className="h-20" alt="Brand Logo" />
                </div>
                <div className="md:w-[55%] md:ml-5 w-[50%]">
                    <form className="flex w-[100%] relative">
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
                <div className="md:w-[7%] md:flex md:justify-between md:ml-3 hidden">
                    <FaUserAlt
                        size={35}
                        style={{ color: "#fff", cursor: "pointer" }}
                    />
                    <AiOutlineShoppingCart
                        size={35}
                        style={{ color: "#fff", cursor: "pointer" }}
                    />
                </div>
                <div className="md:ml-4 md:block hidden">
                    <img
                        src={offerBanner}
                        className="h-14"
                        alt="Offer Banner"
                    />
                </div>
                <div className="md:hidden w-[10%]" onClick={showMobileMenu}>
                    <AiOutlineMenu size={30} style={{ color: "#fff" }} />
                </div>
            </div>
            <div
                className="w-60 bg-slate-600 pl-4 pt-4 pb-10 leading-10 font-serif text-lg text-slate-200 rounded absolute top-0 right-[-500px] md:hidden duration-500"
                ref={mMenuRef}
            >
                <span onClick={closeMobileMenu}>
                    <AiOutlineClose
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                        }}
                        size={30}
                    />
                </span>
                <ul className="pt-6">
                    <NavLink to="/" className="navLink-style"></NavLink>
                    <NavLink to="/">Login</NavLink>
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="/">cart</NavLink>
                    <NavLink to="/">Logout</NavLink>
                </ul>
            </div>
        </>
    );
};

export default Header;
