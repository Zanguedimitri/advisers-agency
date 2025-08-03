'use client'

import { useState } from 'react';
import logo from '../assets/advisers.avif';
import type { Menu } from '../models/menu.model';

const navigation: Menu[] = [
    { name: 'Acceuil', href: '#' },
    { name: 'A propos', href: '#' },
    {
        name: 'Service',
        href: '#',
        children: [
            { name: 'Consulting', href: '#consulting' },
            { name: 'Développement Web', href: '#web' },
            { name: 'Marketing Digital', href: '#marketing' },
        ],
    },
    { name: 'FAQS', href: '#' },
    { name: 'Info & Actu', href: '#' },
    { name: 'Contact', href: '#' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="inset-x-0 top-0 z-50 bg-transparent">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-center gap-[5rem] py-4"
                >
                    {/* Logo */}
                    <div>
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                alt="logo de Advisers Agency"
                                src={logo}
                                className="h-auto w-auto"
                            />
                        </a>
                    </div>

                    {/* Menu mobile (désactivé ici) */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icône burger si besoin */}
                        </button>
                    </div>

                    {/* Menu principal avec sous-menu */}
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) =>
                            item.children ? (
                                <div key={item.name} className="group relative">
                                    <a
                                        href={item.href}
                                        className="text-lg font-semibold text-[#273b7bff]
                      border-t-2 border-[#273b7bff]
                      hover:text-[#f16876] focus:text-[#f16876]
                      hover:border-[#f16876] focus:border-[#f16876]
                      hover:border-t-4 focus:border-t-4
                      transition-all duration-300"
                                    >
                                        {item.name}
                                    </a>
                                    {/* Sous-menu avec même style */}
                                    <div className="absolute left-0 top-full mt-2 hidden min-w-[12rem] rounded-md bg-white shadow-lg group-hover:block z-50">
                                        <ul className="py-2">
                                            {item.children.map((child) => (
                                                <li key={child.name}>
                                                    <a
                                                        href={child.href}
                                                        className="text-lg block font-semibold text-[#273b7bff]
                              border-t-2 border-[#273b7bff]
                              hover:text-[#f16876] focus:text-[#f16876]
                              hover:border-[#f16876] focus:border-[#f16876]
                              hover:border-t-4 focus:border-t-4
                              transition-all duration-300 px-4 py-2"
                                                    >
                                                        {child.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-semibold text-[#273b7bff]
                    border-t-2 border-[#273b7bff]
                    hover:text-[#f16876] focus:text-[#f16876]
                    hover:border-[#f16876] focus:border-[#f16876]
                    hover:border-t-4 focus:border-t-4
                    transition-all duration-300"
                                >
                                    {item.name}
                                </a>
                            )
                        )}
                    </div>

                    {/* Barre de recherche */}
                    <div>
                        <form className="max-w-md mx-auto">
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search Mockups, Logos..."
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
        </div>
    );
}
