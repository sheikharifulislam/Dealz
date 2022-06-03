import React from 'react';
import { NavLink } from 'react-router-dom';
import offerName from '../../../../../assets/images/offerName.webp';

const SuperDealsHeader = () => {
    return (
        <div className="flex w-full items-center">
            <div>
                <img src={offerName} alt="" />
            </div>
            <div className="flex-1">
                <h4 className="font-mono text-xl text-gray-400">
                    Top products. Incredible prices.
                </h4>
            </div>
            <div>
                <NavLink
                    to="/"
                    className="text-md block font-mono underline decoration-wavy"
                >
                    View More
                </NavLink>
            </div>
        </div>
    );
};

export default SuperDealsHeader;