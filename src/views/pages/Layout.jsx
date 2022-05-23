import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "./Main";

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;
