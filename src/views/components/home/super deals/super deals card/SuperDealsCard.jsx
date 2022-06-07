import React from "react";
import offrRange from "../../../../../utils/offerRange";

const SuperDealsCard = ({ singleDeals }) => {
    const { productImages, price, offerPrice, order } = singleDeals;
    return (
        <div className="h-[250px] w-full overflow-hidden border bg-white hover:cursor-pointer">
            <div className="h-[75%] w-full">
                <img
                    src={productImages[0].imgUrl}
                    className="h-full w-full"
                    alt=""
                />
            </div>
            <div className="relative left-[5%] w-[90%]">
                <div className="flex items-center ">
                    <div>
                        <small className="font-serif text-2xl">
                            ${offerPrice}
                        </small>
                    </div>
                    <div>
                        <small className="ml-2 mt-1 rounded bg-gradient-to-r from-[#ff5f3b] to-[#ff1f00]  px-2  font-mono text-lg text-white">
                            -{offrRange(price, offerPrice)}
                        </small>
                    </div>
                </div>
                <div>
                    <small className="font-roboto text-gray-500">
                        {order} orders
                    </small>
                </div>
            </div>
        </div>
    );
};

export default SuperDealsCard;
