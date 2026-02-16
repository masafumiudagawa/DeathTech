const footerLinks = {
    サービス: [
        { label: 'ホーム', href: '#' },
        { label: '機能紹介', href: '#solutions' },
        { label: '料金プラン', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ],
    会社情報: [
        { label: '会社概要', href: '#' },
        { label: '会員規約', href: '#' },
        { label: 'プライバシーポリシー', href: '#' },
        { label: '特定商取引法に基づく表記', href: '#' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-12 lg:py-16 grid md:grid-cols-3 gap-10 lg:gap-16">
                    {/* Brand */}
                    <div>
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-lg shadow-primary-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Death<span className="text-primary-400">Tech</span>
                            </span>
                        </a>
                        <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
                            サブスクの一元管理で、忘れてしまう無駄な支払いと、
                            遺族の不安をなくすサービスです。
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © 2026 DeathTech. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="X (Twitter)">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Facebook">
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
