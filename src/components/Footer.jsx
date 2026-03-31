import { Link } from 'react-router-dom'

const footerLinks = {
    サービス: [
        { label: 'ホーム', to: '/' },
        { label: '機能紹介', to: '/#solutions' },
        { label: '料金プラン', to: '/#pricing' },
        { label: 'FAQ', to: '/#faq' },
    ],
    会社情報: [
        { label: '会社概要', to: '/about' },
        { label: 'お問い合わせ', to: '/contact' },
        { label: '会員規約', to: '/terms' },
        { label: 'プライバシーポリシー', to: '/privacy' },
        { label: '特定商取引法に基づく表記', to: '/tokushoho' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-dark-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-12 lg:py-16 grid md:grid-cols-3 gap-10 lg:gap-16">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/images/logo-icon.jpg"
                                alt="DeathTech"
                                className="w-10 h-10 rounded-xl object-cover"
                            />
                            <span className="text-xl font-bold tracking-wider">
                                <span className="text-white">Death</span>
                                <span className="gradient-text">Tech</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-dark-400 text-sm leading-relaxed max-w-xs">
                            サブスクの一元管理で、忘れてしまう無駄な支払いと、
                            遺族の不安をなくすサービスです。
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.to.startsWith('/#') ? (
                                            <a
                                                href={link.to}
                                                className="text-sm text-dark-400 hover:text-accent-400 transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.to}
                                                className="text-sm text-dark-400 hover:text-accent-400 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-dark-500">
                        &copy; 2026 DeathTech. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-accent-400 transition-colors" aria-label="X (Twitter)">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-accent-400 transition-colors" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
