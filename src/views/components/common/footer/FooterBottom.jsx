import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-center text-xs leading-relaxed text-gray-300">
                © Company 2022. All rights reserved.
                <br />
                Created with
                <NavLink
                    to="/"
                    className="underline transition hover:text-white"
                >
                    Laravel
                </NavLink>
                and
                <NavLink
                    className="underline transition hover:text-white"
                    to="/"
                >
                    Laravel Livewire
                </NavLink>
            </p>
        </div>
    );
};

export default FooterBottom;
