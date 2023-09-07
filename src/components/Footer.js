import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-7 relative z-5 overflow-y-auto min-h-1/2">
            <div className="container mx-auto text-center">
                <p>서울특별시 성동구 왕십리로269 KEYCOFFEE COMPANY</p>
                <p>&copy; {new Date().getFullYear()} Keycoffee.store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;