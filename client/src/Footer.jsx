import React from 'react';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-100 text-black py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Section 1 */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Learn Today. Lead Tomorrow.</h2>
                    <p className="text-xs leading-tight mb-4">
                        Empowering Learners To Become Creators Of The Digital Future — One Skill, One Innovation, One Success At A Time.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                            <FaLinkedin size={18} />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                            <FaWhatsapp size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Section 2 */}
                <div>
                    <h3 className="font-semibold mb-3">Information</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Courses</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Gallery</a></li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Web Development</a></li>
                        <li><a href="#" className="hover:underline">Application Development</a></li>
                        <li><a href="#" className="hover:underline">Digital Marketing</a></li>
                        <li><a href="#" className="hover:underline">UI UX Designing</a></li>
                        <li><a href="#" className="hover:underline">Cloud Hosting</a></li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div>
                    <h3 className="font-semibold mb-3">Privacy Policy</h3>
                    <h4 className="font-semibold mb-2">Visit Us</h4>
                    <address className="not-italic text-sm mb-2">
                        Office No 222, Golden City Center, Chhatrapati Sambhajinagar 431001
                    </address>
                    <p className="font-semibold text-sm">+91 9621345050</p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                    <FaGlobe />
                    <a href="https://www.techsuryaitsolution.com" target="_blank" rel="noreferrer" className="font-semibold hover:underline">
                        www.techsuryaitsolution.com
                    </a>
                </div>
                <div className="mt-4 md:mt-0">
                    ©2025 all rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;