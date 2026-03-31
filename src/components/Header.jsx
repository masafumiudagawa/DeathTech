import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { href: '/#problems', label: '課題' },
    { href: '/#solutions', label: '機能' },
    { href: '/#pricing', label: '料金' },
    { href: '/#faq', label: 'FAQ' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const handleNavClick = (e, href) => {
        setIsMobileMenuOpen(false)
        if (href.startsWith('/#')) {
            const id = href.substring(2)
            if (location.pathname === '/') {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-lg shadow-black/20 border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/images/logo-icon.jpg"
                            alt="DeathTech"
                            className="w-10 h-10 rounded-xl object-cover shadow-lg group-hover:shadow-accent-500/30 transition-shadow"
                        />
                        <span className="text-xl font-bold tracking-wider">
                            <span className="text-white">Death</span>
                            <span className="gradient-text">Tech</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link
                            to="/about"
                            className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                            会社概要
                        </Link>
                        <a
                            href="/#pricing"
                            onClick={(e) => handleNavClick(e, '/#pricing')}
                            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl hover:from-primary-500 hover:to-accent-400 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            無料で始める
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label="メニュー"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                >
                    <nav className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-3 text-sm font-medium text-dark-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link
                            to="/about"
                            className="px-4 py-3 text-sm font-medium text-dark-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                        >
                            会社概要
                        </Link>
                        <a
                            href="/#pricing"
                            onClick={(e) => handleNavClick(e, '/#pricing')}
                            className="mx-4 mt-2 px-5 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl shadow-lg shadow-accent-500/20 transition-all"
                        >
                            無料で始める
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
