import React from 'react';
import Logo_black from '../assets/Logo_black.png';

function Footer() {
    return (
        <footer className="bg-white text-black w-[80%] mx-auto pt-12 pb-6">
            <div>
                <img src={Logo_black} alt="Mor-Selv" className="w-32 mt-4 mb-10" />
            </div>

            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
                {/* 👉 Grid now has 5 columns on md+ screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm w-full">
                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold mb-2">Quick links</h3>
                        <ul className="space-y-1">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                            <li>Deals & offers</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-2">Business owner</h3>
                        <ul className="space-y-1">
                            <li>List your business</li>
                            <li>FAQs</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold mb-2">Categories</h3>
                        <ul className="space-y-1">
                            <li>Skin, hair & beauty</li>
                            <li>Body therapies</li>
                            <li>Health wellness</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold mb-2">&nbsp;</h3>
                        <ul className="space-y-1">
                            <li>Travel & relaxation</li>
                            <li>Mental & emotional wellness</li>
                            <li>Diet & weight management</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h3 className="font-semibold mb-2"> &nbsp;</h3>
                        <ul className="space-y-1">
                            <li>Friends, fun & community</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-xs text-gray-500 border-t border-gray-200 pt-4 text-center">
                Your Privacy Choices | Legal | Privacy Policy & Your Privacy Rights | Terms of Service | Copyright Policy & Claims
            
                Copyright ©2001–2025
            </div>
        </footer>
    );
}

export default Footer;
