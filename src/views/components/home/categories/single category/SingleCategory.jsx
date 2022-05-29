import React from "react";

const SingleCategory = ({ category }) => {
    return (
        <div className="h-[150px] md:h-[170px] border border-gray-100 shadow-slate-400 cursor-pointer hover:shadow-lg">
            <div className="w-full h-[70%]">
                <img
                    src={category.categoryImg}
                    className="w-full h-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt=""
                />
            </div>
            <div className="px-2 text-center mt-3">
                <h5>{category.categoryName}</h5>
            </div>
        </div>
    );
};

export default SingleCategory;
