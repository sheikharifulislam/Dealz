import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./single product/SingleProduct";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("/products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);
    return (
        <div className="cs_container">
            <div>
                <h2 className="font-serif text-[28px]">More To Love</h2>
            </div>
            <div className="grid grid-cols-5">
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
