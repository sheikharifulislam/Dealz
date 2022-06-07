import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import StarRating from "../../../../lib/star rating/StarRating";
import offerRange from "../../../../utils/offerRange";

const ProductInfo = ({ product }) => {
    return (
        <div className="w-[37%]">
            <div className="border-b-2 border-gray-100 pb-2">
                <div>
                    <h2>{product.productName}</h2>
                </div>
                <div className="flex items-center">
                    <span className="flex items-center">
                        3.9 <StarRating readonly={true} />
                    </span>
                    <span className="ml-5">412 review</span>
                </div>
                <div>
                    <span className="capitalize">Brand: {product.brand}</span>
                </div>
            </div>
            <div>
                <small className="text-2xl text-[#f57224]">
                    ${product.offerPrice}
                </small>
                <div>
                    <del className="text-gray-500">
                        <small>${product.price}</small>
                    </del>
                    <small className="ml-1 inline-block text-lg">
                        {offerRange(product.price, product.offerPrice)}%
                    </small>
                </div>
            </div>
            <div>
                <h4>Color</h4>
                <div className="item-center flex">
                    {product.colors?.map((color, index) => (
                        <div
                            className="mr-2 mb-1 h-8 w-8 cursor-pointer rounded-full"
                            style={{ backgroundColor: color }}
                            key={index}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="mt-1">
                <h4>Size</h4>
                <div>
                    {product.size?.map((size, index) => (
                        <div
                            key={index}
                            className="mr-2 mb-1 inline-block cursor-pointer rounded border px-4 py-1"
                        >
                            {size.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
            <div className="item-center mt-3 flex">
                <h4 className="mr-4">Quantity </h4>
                <div className="flex items-center">
                    <button className="rounded bg-gray-200 p-2">
                        <AiOutlinePlus />
                    </button>
                    <input
                        type="number"
                        className="mx-2 w-12 p-0 text-center"
                        name="quantity"
                        defaultValue="1"
                    />
                    <button className="rounded bg-gray-200 p-2">
                        <AiOutlineMinus />
                    </button>
                </div>
            </div>
            <div className="item-center mt-5 flex justify-between  ">
                <button className="w-[49%] rounded bg-[#2abbe8] py-3 text-white">
                    Buy Now
                </button>
                <button className="w-[49%] rounded bg-[#f57224] py-3 text-white">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
