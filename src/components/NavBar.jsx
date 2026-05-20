'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React, { useState } from 'react'

import { FiMenu, FiX } from 'react-icons/fi'
import { NavDropDown } from './NavDropDown'

const NavBar = () => {
    const { data: session } = authClient.useSession()
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Facilities', path: '/all-facilities' },
        { name: 'My Bookings', path: '/my-bookings' },
        { name: 'Add Facility', path: '/add-facility' },
        { name: 'Manage Facilities', path: '/manage-facilities' },
    ]

    const handleLogout = async () => {
        await authClient.signOut()
        alert('Logged out successfully')
    }

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div>
                            <h1 className="text-2xl font-black leading-none text-gray-900">
                                Sport
                                <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                                    Nest
                                </span>
                            </h1>
                            <p className="text-xs text-sky-600 tracking-[2px] uppercase mt-1 font-medium">
                                Play | Book | Compete
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 font-semibold"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden lg:flex gap-2 items-center">
                        {session?.user ? (
                            <div>
                                <NavDropDown />
                            </div>
                        ) : (
                            <Button className="bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-xl px-6 font-semibold shadow-md">
                                <Link href="/login">Login</Link>
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-5 pt-2 bg-white border-t border-blue-100">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 flex items-center gap-2">
                        <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-xl font-semibold">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button
                            onClick={handleLogout}
                            variant="danger"
                            className="rounded-xl"
                        >
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar