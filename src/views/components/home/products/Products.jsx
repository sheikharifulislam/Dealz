import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from './single product/SingleProduct'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get('/products.json')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])
    return (
        <div className="cs_container">
            <div className="mb-4">
                <h2 className="font-serif text-[28px]">More To Love</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products
