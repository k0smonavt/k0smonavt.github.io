import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoUrl from '../assets/img/logo-white.svg';

const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Программный комитет', path: '/committee' },
    { label: 'Программа', path: '/program' },
    { label: 'Доклады', path: '/papers' },
    { label: 'Оргвзносы', path: '/fees' },
    /*{ label: 'Место проведения', path: '/venue' },*/
    { label: 'Контактная информация', path: '/contacts' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log('logoUrl:', logoUrl);
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="bg-[#003087] text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
                    <a>
                        <img src={logoUrl} style={{ width: '250px'}} alt="logo-svg"/>
                    </a>
                    <div className="flex items-center gap-4">
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
                <Link to="/" className="flex items-center gap-3 group">

                    <div>
                        <div className="text-[#003087] font-bold text-base md:text-lg leading-tight group-hover:text-blue-700 transition-colors">
                            ПУТС
                        </div>
                        <div className="text-gray-500 text-xs md:text-sm leading-tight">
                            Международная конференция
                        </div>
                        <div className="text-gray-400 text-xs hidden md:block">
                            Дата
                        </div>
                    </div>
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#003087] focus:outline-none rounded-lg ml-auto"
                    aria-label="Toggle menu"
                >
                    <div className="w-7 h-4.5 flex flex-col justify-between items-center">
                        <span className={`h-0.5 w-full bg-[#003087] transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-[#003087] transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-[#003087] transform transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            <nav className="bg-[#003087]">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="hidden md:flex flex-wrap">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end={item.path === '/'}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 text-sm font-medium transition-colors duration-150 border-b-2 ${
                                            isActive
                                                ? 'text-white border-yellow-400 bg-blue-800'
                                                : 'text-blue-100 border-transparent hover:text-white hover:bg-blue-800'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {menuOpen && (
                        <ul className="flex flex-col md:hidden pb-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === '/'}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 text-sm font-medium border-l-4 ${
                                                isActive
                                                    ? 'text-white border-yellow-400 bg-blue-800'
                                                    : 'text-blue-100 border-transparent hover:text-white hover:bg-blue-800'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}
