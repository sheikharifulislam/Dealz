import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/HeaderSlider";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Main;
