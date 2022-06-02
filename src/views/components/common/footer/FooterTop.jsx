import React from 'react';

const FooterTop = () => {
    return (
        <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-medium text-white sm:text-3xl">
                Want us to email you with the latest blockbuster news?
            </strong>

            <form className="mt-6">
                <div className="relative max-w-lg">
                    <label className="sr-only" htmlFor="email">
                        Email
                    </label>

                    <input
                        className="w-full rounded-full border-none bg-white p-4 pr-16 text-sm font-medium"
                        id="email"
                        type="email"
                        placeholder="john@doe.com"
                    />

                    <button
                        className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-blue-600 p-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700"
                        type="button"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FooterTop;
