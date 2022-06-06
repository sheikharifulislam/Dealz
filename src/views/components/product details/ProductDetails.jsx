import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineMinus,
    AiOutlinePlus,
} from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineSecurity } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import StarRating from '../../../lib/star rating/StarRating';
import offerRange from '../../../utils/offerRange';

const ProductDetails = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get('/productDetails.json')
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
                    <div className="w-[30%]">
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
                    <div className="w-[40%]">
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
                                        className="h-8 w-8 rounded-[50%]"
                                        style={{ backgroundColor: color }}
                                        key={index}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4>Size</h4>
                            <div>
                                {product.size?.map((size, index) => (
                                    <div
                                        key={index}
                                        className="mr-2 inline-block border px-4 py-1"
                                    >
                                        {size.toUpperCase()}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <h4>Quantity </h4>
                            <div className="flex items-center">
                                <AiOutlinePlus />
                                <input
                                    type="number"
                                    className="mx-2 w-12 border-hidden  bg-gray-100 p-0 text-center"
                                    name="quantity"
                                    defaultValue="1"
                                />
                                <AiOutlineMinus />
                            </div>
                        </div>
                        <div>
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div>
                            <div>
                                <h4>Delivery</h4>
                                <AiOutlineInfoCircle />
                            </div>

                            <div>
                                <IoLocationOutline />
                                <span>
                                    Dhaka, Dhaka North, Banani Road No. 12 - 19
                                </span>
                                <button>Change</button>
                            </div>
                            <div>
                                <AiOutlineHome />
                                <div>
                                    <span>Home Delivery</span>
                                    <small>3-5 days</small>
                                </div>
                                <span>$50</span>
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
