import { Link } from 'react-router-dom'

const values = [
    {
        title: '大切な人を守る',
        description: '突然の事態にも、家族が困らないように。デジタル時代の「もしも」に備えるサービスを提供します。',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
    {
        title: '透明性と信頼',
        description: 'お客様のデータは最高水準のセキュリティで保護。料金体系もシンプルで分かりやすく。',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: 'テクノロジーで社会課題を解決',
        description: 'デジタル遺品問題は、現代社会の見過ごされた課題。テクノロジーの力で、誰もが安心できる社会を。',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    },
]

const team = [
    {
        role: '代表取締役',
        description: 'デジタル遺品問題に直面した経験から、サブスクカッターを構想。「もしもの時に家族が困らない社会」の実現を目指す。',
    },
    {
        role: 'CTO',
        description: 'セキュリティ分野で10年以上の経験。金融機関レベルの暗号化技術を活用し、お客様のデータを安全に守る。',
    },
    {
        role: 'プロダクトマネージャー',
        description: '「誰でも使える」をモットーに、シンプルで直感的なUI/UXを追求。ユーザーの声を大切にしたプロダクト開発。',
    },
]

export default function About() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 lg:py-28 overflow-hidden page-hero">
                <div className="absolute inset-0 bg-dark-900" />
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-600/8 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                        会社概要
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                        デジタル時代の
                        <span className="gradient-text">「もしも」</span>
                        に備える
                    </h1>
                    <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
                        DeathTechは、サブスクリプションの一元管理と家族への情報共有を通じて、
                        デジタル遺品問題を解決するスタートアップです。
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 lg:py-24 section-light noise-bg relative">
                <div className="absolute top-0 left-0 w-full section-divider" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                私たちの<span className="gradient-text">ミッション</span>
                            </h2>
                            <p className="text-dark-300 leading-relaxed mb-4">
                                日本では年間約140万人が亡くなっています。その多くが、デジタルサービスの契約情報を
                                家族に伝えないまま逝ってしまいます。
                            </p>
                            <p className="text-dark-300 leading-relaxed mb-4">
                                残された家族は、故人がどのサブスクリプションに加入していたか分からず、
                                請求が続くまま途方に暮れることになります。
                            </p>
                            <p className="text-dark-300 leading-relaxed">
                                私たちは、この「デジタル遺品問題」をテクノロジーで解決し、
                                <span className="text-accent-400 font-semibold">誰もが安心してデジタルライフを送れる社会</span>
                                を目指しています。
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden glow-mixed">
                                <img
                                    src="/images/logo-3d-horizontal.jpg"
                                    alt="DeathTech"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 lg:py-24 section-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">
                            私たちの<span className="gradient-text">価値観</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card-dark rounded-2xl p-8 text-center hover:border-primary-500/20">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-dark-300 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 lg:py-24 section-light noise-bg relative">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">
                            <span className="gradient-text">チーム</span>
                        </h2>
                        <p className="mt-4 text-dark-300">多様な専門性を持つメンバーが集まっています</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="card-dark rounded-2xl p-8 hover:border-accent-500/20">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white text-2xl font-bold mb-5">
                                    {member.role[0]}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                                <p className="text-dark-300 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-16 lg:py-24 section-dark">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        会社<span className="gradient-text">情報</span>
                    </h2>
                    <div className="card-dark rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {[
                                    ['会社名', 'DeathTech株式会社'],
                                    ['所在地', '東京都渋谷区'],
                                    ['設立', '2026年'],
                                    ['事業内容', 'サブスクリプション管理サービス「サブスクカッター」の企画・開発・運営'],
                                    ['お問い合わせ', 'info@deathtech.jp'],
                                ].map(([label, value], index) => (
                                    <tr key={index} className="border-b border-white/5 last:border-0">
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-dark-200 w-1/3 bg-white/[0.02]">
                                            {label}
                                        </th>
                                        <td className="px-6 py-5 text-sm text-dark-300">
                                            {label === 'お問い合わせ' ? (
                                                <Link to="/contact" className="text-accent-400 hover:text-accent-300 hover:underline">
                                                    お問い合わせフォーム
                                                </Link>
                                            ) : value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 section-light relative">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        サブスク管理を始めませんか？
                    </h2>
                    <p className="text-dark-300 mb-8">
                        無料プランからお気軽にお試しいただけます
                    </p>
                    <Link
                        to="/#pricing"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-2xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1"
                    >
                        料金プランを見る
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}
