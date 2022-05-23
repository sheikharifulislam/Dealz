import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import offerBanner from "../../../assets/images/offerBanner.png";

const Header = () => {
    return (
        <div className="container mx-auto px-8 flex items-center  bg-slate-800">
            <div className="w-[10%]">
                <img src={logo} className="h-20" alt="Brand Logo" />
            </div>
            <div className="w-[55%] ml-5 ">
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
            <div className="w-[7%] flex justify-between ml-3">
                <FaUserAlt
                    size={35}
                    style={{ color: "#fff", cursor: "pointer" }}
                />
                <AiOutlineShoppingCart
                    size={35}
                    style={{ color: "#fff", cursor: "pointer" }}
                />
            </div>
            <div className="ml-4">
                <img src={offerBanner} className="h-14" alt="Offer Banner" />
            </div>
        </div>
    );
};

export default Header;
