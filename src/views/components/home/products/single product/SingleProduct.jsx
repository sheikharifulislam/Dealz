import React from 'react';
import StarRating from '../../../../../lib/star rating/StarRating';
import offerRange from '../../../../../utils/offerRange';

const SingleProduct = ({ product }) => {
    return (
        <div className="h-[340px] w-full overflow-hidden rounded border border-gray-300 bg-white shadow-md hover:cursor-pointer">
            <div className="relative top-[5%] left-[5%] h-[90%] w-[90%]">
                <div className="h-[65%] w-full overflow-hidden">
                    <img
                        src={product.productImages[0].imgUrl}
                        className="h-full w-full duration-700"
                        alt={product.inTheBox}
                    />
                </div>
                <div className="h-[35%] w-full">
                    <div className="mt-[2%] h-[32%] w-full overflow-hidden leading-[19px] ">
                        <h4 className="font-openSans text-xs font-normal text-gray-700 line-clamp-2">
                            {product.productName}
                        </h4>
                    </div>
                    <div className="mt-1 h-[35%] w-full">
                        <div>
                            <h5 className="font-serif text-base leading-3">
                                ${product.offerPrice}
                            </h5>
                        </div>
                        <div>
                            <del className="text-sm text-gray-700 line-through">
                                <small>${product.price}</small>
                            </del>
                            <small className="ml-1 inline-block text-xs">
                                {offerRange(product.price, product.offerPrice)}%
                            </small>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <StarRating readonly />
                        </div>
                        <div>
                            <span className="ml-1 text-[12px]">
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
