import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Inventory', href: '#inventory' },
        { name: 'Financing', href: '#financing' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className={`text-2xl font-bold italic ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                    }`}>
                    TheCarDealers
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                    {navItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                            isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-200'
                        }`}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium">
                    Book Test Drive
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-md ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
                    {navItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                        >
                        {item.name}
                        </a>
                    ))}
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                        Book Test Drive
                    </button>
                    </div>
                </div>
                )}
            </div>
        </nav>
    );
}