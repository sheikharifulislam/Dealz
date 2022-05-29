import axios from "axios";
import React, { useEffect, useState } from "react";

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
    return <div>Products</div>;
};

export default Products;
