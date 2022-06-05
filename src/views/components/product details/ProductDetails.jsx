import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import StarRating from '../../../lib/star rating/StarRating';

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
        <section>
            <div>
                <div>
                    <div>
                        <div>
                            {Object.keys(product).length >= 1 && (
                                <img
                                    src={product?.productImages[0].imgUrl}
                                    alt=""
                                />
                            )}
                        </div>
                        <div>
                            {product?.productImages?.map((image, index) => (
                                <img src={image.imgUrl} key={index} alt="" />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>{product.productName}</h2>
                            <h4>{product.offerPrice}</h4>
                        </div>
                        <div>
                            <span>
                                3.9 <StarRating />
                            </span>
                            <span>412 review</span>
                        </div>
                        <div>
                            <h4>Color</h4>
                            <div>
                                {product.colors?.map((color, index) => (
                                    <div
                                        className="h-8 w-8 rounded-full"
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
                        <div>
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
