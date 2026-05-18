import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-gray-300 pt-16 pb-8 mt-20">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-black text-white">
                            Sport<span className="text-sky-500">Nest</span>
                        </h2>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            Your trusted platform to find and book sports facilities easily.
                            Play more, worry less.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-sky-400">Home</Link></li>
                            <li><Link href="/facilities" className="hover:text-sky-400">Facilities</Link></li>
                            <li><Link href="/bookings" className="hover:text-sky-400">My Bookings</Link></li>
                            <li><Link href="/login" className="hover:text-sky-400">Login</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-sky-400" href="#">Help Center</a></li>
                            <li><a className="hover:text-sky-400" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-sky-400" href="#">Terms & Conditions</a></li>
                            <li><a className="hover:text-sky-400" href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>

                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-sky-400 transition"><FaFacebook /></a>
                            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
                            <a href="#" className="hover:text-sky-400 transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-sky-400 transition"><FaYoutube /></a>
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Stay connected for updates & offers.
                        </p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} SportNest. All rights reserved.
                </div>

            </div>

        </footer>
    )
}

export default Footer