import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/product details/ProductDetails";
import Home from "./Home";
import SignIn from "./SignIn";
import Signup from "./Signup";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};

export default Main;
