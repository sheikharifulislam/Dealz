import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SuperDealsCard from './super deals card/SuperDealsCard';
import SuperDealsHeader from './super deals header/SuperDealsHeader';

const SuperDeals = () => {
    const [superDeals, setSuperDeals] = useState([]);
    useEffect(() => {
        axios
            .get('/products.json')
            .then((response) => {
                setSuperDeals(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    });
    return (
        <section className="cs_container my-10 rounded-md bg-white px-4 py-6 drop-shadow-lg">
            <SuperDealsHeader />
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 xs:grid-cols-2 sm:grid-cols-3 sm:gap-y-0 md:grid-cols-4 xl:grid-cols-5">
                {superDeals.slice(0, 5).map((singleDeals) => (
                    <SuperDealsCard
                        key={singleDeals.id}
                        singleDeals={singleDeals}
                    />
                ))}
            </div>
        </section>
    );
};

export default SuperDeals;
