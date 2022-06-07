import axios from "axios";
import React, { useEffect, useState } from "react";
import ProuctDescriptions from "./product details bottom/ProuctDescriptions";
import DeliveryInfo from "./product details top/DeliveryInfo";
import ProductDetailsImage from "./product details top/ProductDetailsImage";
import ProductInfo from "./product details top/ProductInfo";
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
        <section className="cs_container mb-10 rounded border bg-white p-8 shadow-md">
            <div className="mb-3 flex justify-between">
                <ProductDetailsImage product={product} />
                <ProductInfo product={product} />
                <DeliveryInfo />
            </div>
            <section>
                <ProuctDescriptions product={product} />
            </section>
        </section>
    );
};

export default ProductDetails;
