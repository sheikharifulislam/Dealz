import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineMinus,
    AiOutlinePlus,
} from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import StarRating from "../../../lib/star rating/StarRating";
import offerRange from "../../../utils/offerRange";

const ProductDetails = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get("/productDetails.json")
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <section className="cs_container rounded border bg-white p-8 shadow-md">
            <div>
                <div className="flex justify-between">
                    <div className="w-[27%]">
                        <div className="h-[330px] border-b border-gray-300 pb-2">
                            {Object.keys(product).length >= 1 && (
                                <img
                                    src={product?.productImages[0].imgUrl}
                                    className="h-full w-full rounded"
                                    alt=""
                                />
                            )}
                        </div>
                        <div className="mt-3 flex">
                            {product?.productImages?.map((image, index) => (
                                <img
                                    src={image.imgUrl}
                                    key={index}
                                    className="mr-1 h-14 w-14 cursor-pointer rounded border hover:border-pink-400"
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
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
                                <span className="capitalize">
                                    Brand: {product.brand}
                                </span>
                            </div>
                        </div>
                        <div>
                            <small className="text-2xl text-[#f57224]">
                                ${product.offerPrice}
                            </small>
                            <div>
                                <del className="text-md text-gray-500">
                                    <small>${product.price}</small>
                                </del>
                                <small className="ml-1 inline-block text-lg">
                                    {offerRange(
                                        product.price,
                                        product.offerPrice
                                    )}
                                    %
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
                                    className="mx-2 w-12 border-hidden p-0 text-center"
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
                    <div className="w-[30%] rounded bg-gray-50 py-3 px-2">
                        <div className="border-b-2 border-gray-100 pb-2">
                            <div className="mb-2 flex items-center justify-between">
                                <h4>Delivery</h4>
                                <AiOutlineInfoCircle />
                            </div>
                            <div className="mb-2 flex items-start border-b pb-2">
                                <IoLocationOutline size={22} />
                                <div className="flex w-[90%] items-center">
                                    <span className="text-sm">
                                        Dhaka, Dhaka North, Banani Road No. 12 -
                                        19
                                    </span>
                                    <button className="text-xs uppercase text-[#1a9cb7]">
                                        Change
                                    </button>
                                </div>
                            </div>
                            <div className="item-center flex">
                                <AiOutlineHome size={22} />
                                <div className="ml-1 flex-1">
                                    <span className="block text-sm">
                                        Home Delivery
                                    </span>
                                    <small className="block text-xs">
                                        3-5 days
                                    </small>
                                </div>
                                <span className="">$50</span>
                            </div>
                            <div>
                                <BsCashCoin />
                                <span>Cash on Delivery Available</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Services</h4>
                                <AiOutlineInfoCircle />
                            </div>
                            <div>
                                <TbTruckReturn />
                                <div>
                                    <span>7 Days Returns</span>
                                    <small>
                                        Change of mind is not applicable
                                    </small>
                                </div>
                            </div>
                            <div>
                                <MdOutlineSecurity />
                                <span>Warranty not available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
