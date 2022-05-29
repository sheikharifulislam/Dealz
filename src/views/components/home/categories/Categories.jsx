import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCategory from "./single category/SingleCategory";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("/categoriesData.json")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);
    return (
        <div className="container max-w-[90%] mx-auto mt-5">
            <div className="mb-4">
                <h2 className="font-serif text-[28px]">Categories</h2>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
                {categories.map((category) => (
                    <SingleCategory id={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
