import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-[1100] border-b border-neutral-200 bg-white/90 backdrop-blur">
            {/* Navbar utama */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-xl font-semibold tracking-tight"
                >
                    Explore Indonesia
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "font-medium text-[#1F6F5C]"
                                : "text-neutral-500 transition hover:text-[#1F6F5C]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/explore"
                        className={({ isActive }) =>
                            isActive
                                ? "font-medium text-[#1F6F5C]"
                                : "text-neutral-500 transition hover:text-[#1F6F5C]"
                        }
                    >
                        Explore
                    </NavLink>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-xl md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-neutral-200 px-6 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4">
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium text-[#1F6F5C]"
                                    : "text-neutral-500"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/explore"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium text-[#1F6F5C]"
                                    : "text-neutral-500"
                            }
                        >
                            Explore
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar