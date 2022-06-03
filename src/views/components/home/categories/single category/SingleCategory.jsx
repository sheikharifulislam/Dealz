import React from 'react';

const SingleCategory = ({ category }) => {
    return (
        <div className="h-[170px] cursor-pointer border border-gray-100 bg-white shadow-slate-400 hover:shadow-lg">
            <div className="h-[70%] w-full">
                <img
                    src={category.categoryImg}
                    className="relative top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
                    alt=""
                />
            </div>
            <div className="mt-3 px-2 text-center">
                <h5>{category.categoryName}</h5>
            </div>
        </div>
    );
};

export default SingleCategory;
