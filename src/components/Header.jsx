import { useState, useEffect } from 'react'

const navLinks = [
    { href: '#problems', label: '課題' },
    { href: '#solutions', label: '機能' },
    { href: '#pricing', label: '料金' },
    { href: '#faq', label: 'FAQ' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-lg border-b border-white/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-800 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">
                            Death<span className="text-primary-600">Tech</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            無料で始める
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
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
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
                        }`}
                >
                    <nav className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleNavClick}
                                className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-primary-600 rounded-xl hover:bg-primary-50 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            onClick={handleNavClick}
                            className="mx-4 mt-2 px-5 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg shadow-primary-500/25 transition-all"
                        >
                            無料で始める
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
