import React from 'react';
import { NavLink } from 'react-router-dom';
import offerName from '../../../../../assets/images/offerName.webp';

const SuperDealsHeader = () => {
    return (
        <div className="w-ful mx-auto mb-3 flex items-center">
            <div>
                <img src={offerName} className="w-[200px] sm:w-auto" alt="" />
            </div>
            <div className="hidden flex-1 sm:block">
                <h4 className="font-mono text-xl text-gray-500">
                    Top products. Incredible prices.
                </h4>
            </div>
            <div>
                <NavLink
                    to="/"
                    className="sm:text-md block font-mono text-sm underline decoration-wavy"
                >
                    View More
                </NavLink>
            </div>
        </div>
    );
};

export default SuperDealsHeader;
