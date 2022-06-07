import React from "react";

const ProductDetailsImage = ({ product }) => {
    return (
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
    );
};

export default ProductDetailsImage;
