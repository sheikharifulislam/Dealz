import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
                {/* import footer top component */}
                <FooterTop />
                {/* import footer main component */}
                <FooterMain />
                {/* import footer bottom component */}
                <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;
