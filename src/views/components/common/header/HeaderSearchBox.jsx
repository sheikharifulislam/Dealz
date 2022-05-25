import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderSearchBox = () => {
    return (
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
    );
};

export default HeaderSearchBox;
