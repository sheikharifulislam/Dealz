import React from "react";

const ProuctDescriptions = ({ product }) => {
    return (
        <div className="mt-14">
            <div className="bg-gray-50 py-2 px-3 line-clamp-1">
                <h2 className="font-serif text-[16px]">
                    Product Details Of {product.productName}
                </h2>
            </div>
            <div className="mt-3 px-3">
                <div className="border-b border-gray-200 pb-3">
                    <ul className="grid grid-cols-2 border-b border-gray-200 pb-4 text-sm capitalize">
                        <li>Product Type: {product.productType}</li>
                        <li>Gender: {product.gender}</li>
                        <li>
                            Colors:
                            {product.colors?.map((color) => ` ${color},`)}{" "}
                        </li>
                        <li>Main Material: {product.mainMaterial}</li>
                    </ul>
                    <div className="mt-3">
                        <p>{product.productDetails}</p>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="line-clamp-1">
                        <h2 className="font-serif text-[16px]">
                            Specifications of {product.productName}
                        </h2>
                    </div>
                    <div className="mt-2">
                        <ul className="grid grid-cols-2">
                            <li className="mt-1 text-[14px] text-gray-500">
                                Brand
                                <span className="block text-black">
                                    {product.brand}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                SKU
                                <span className="block text-black">
                                    {product.sku}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Pack Type
                                <span className="block text-black">
                                    {product.packType}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Capacity
                                <span className="block text-black">
                                    {product.capacity}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Country Of Origin
                                <span className="block text-black">
                                    {product.countryOfOrigin}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Hair Type
                                <span className="block text-black">
                                    {product.hairTypes?.map(
                                        (type) => `${type} ,`
                                    )}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Volume
                                <span className="block text-black">
                                    {product.volume}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Hair Care Benefits
                                <span className="block text-black">
                                    {product.hairCareBenefits?.map(
                                        (benefit) => `${benefit}, `
                                    )}
                                </span>
                            </li>
                            <li className="mt-1 text-[14px] text-gray-500">
                                Pack Size
                                <small className="block text-black">
                                    {product.packSize}
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProuctDescriptions;
