import React from "react";
import StarRating from "../../../../../lib/star rating/StarRating";

const SingleProduct = ({ product }) => {
    const offerRange = (mainPrice, offerPrice) => {
        return Math.round(((mainPrice - offerPrice) / mainPrice) * 100);
    };
    return (
        <div className="w-full h-[340px] border border-gray-300 rounded overflow-hidden shadow-md">
            <div className="w-[90%] h-[90%] relative top-[5%] left-[5%]">
                <div className="w-full h-[65%] overflow-hidden">
                    <img
                        src={product.productImage[0].imgUrl}
                        className="w-full h-full duration-700"
                        alt=""
                    />
                </div>
                <div className="w-full h-[35%]">
                    <div className="w-full h-[32%] mt-[2%] leading-[19px] overflow-hidden ">
                        <h4 className="text-xs text-gray-700 font-openSans font-normal line-clamp-2">
                            {product.productName}
                        </h4>
                    </div>
                    <div className="w-full h-[35%] mt-1">
                        <div>
                            <h5 className="font-serif text-base leading-3">
                                ${product.offerPrice}
                            </h5>
                        </div>
                        <div>
                            <del className="text-gray-700 text-sm line-through">
                                <small>${product.price}</small>
                            </del>
                            <small className="inline-block ml-1 text-xs">
                                {offerRange(product.price, product.offerPrice)}%
                            </small>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <StarRating readonly />
                        </div>
                        <div>
                            <span className="text-[12px] ml-1">
                                ({product.review.length})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
