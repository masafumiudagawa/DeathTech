import { Link } from 'react-router-dom'

const plans = [
    {
        name: '無料プラン',
        price: '0',
        period: '円/月',
        description: 'まずはお試しで始めたい方に',
        features: [
            'サブスク登録 3件まで',
            '基本的な管理機能',
            'メール通知',
            'セキュアなデータ保存',
        ],
        cta: '無料で始める',
        popular: false,
        gradient: 'from-dark-400 to-dark-500',
        borderHover: 'hover:border-white/20',
    },
    {
        name: 'スタンダードプラン',
        price: '480',
        period: '円/月',
        description: 'しっかり管理したい方におすすめ',
        features: [
            'サブスク登録 無制限',
            '高度な管理・分析機能',
            '更新前リマインド通知',
            '月額支出レポート',
            'チャットサポート',
        ],
        cta: 'このプランで始める',
        popular: true,
        gradient: 'from-primary-600 to-accent-500',
        borderHover: 'hover:border-accent-500/40',
    },
    {
        name: 'ファミリープラン',
        price: null,
        period: null,
        description: '家族の安心も考えたい方に',
        features: [
            'スタンダードの全機能',
            '家族への情報共有機能',
            '緊急時アクセス設定',
            '優先サポート',
            '家族2名まで招待可能',
        ],
        cta: 'リリースをお待ちください',
        popular: false,
        comingSoon: true,
        borderHover: 'hover:border-accent-500/30',
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-20 lg:py-28 section-light noise-bg overflow-hidden">
            {/* Section dividers */}
            <div className="absolute top-0 left-0 w-full section-divider" />
            <div className="absolute bottom-0 left-0 w-full section-divider" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        料金プラン
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        あなたに合ったプランを
                        <span className="gradient-text">選べます</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-300">
                        まずは無料プランからお試しください。いつでもアップグレード可能です。
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-2xl transition-all duration-500 hover:-translate-y-2 ${plan.popular
                                    ? 'card-dark border-accent-500/30 shadow-xl shadow-accent-500/5 scale-[1.02] md:scale-105'
                                    : `card-dark ${plan.borderHover}`
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold shadow-lg shadow-accent-500/30">
                                        <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        おすすめ
                                    </span>
                                </div>
                            )}

                            <div className={`p-8 ${plan.comingSoon ? 'opacity-70' : ''}`}>
                                {/* Plan Header */}
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                                    {plan.comingSoon && (
                                        <span className="px-2.5 py-0.5 rounded-full bg-dark-500/50 border border-dark-400/30 text-dark-300 text-xs font-medium">
                                            リリース予定
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-dark-400 mt-1">{plan.description}</p>

                                {/* Price */}
                                <div className="mt-6 flex items-baseline gap-1">
                                    {plan.comingSoon ? (
                                        <span className="text-3xl font-bold text-dark-400">
                                            Coming Soon
                                        </span>
                                    ) : (
                                        <>
                                            <span className="text-5xl font-extrabold text-white">
                                                {plan.price === '0' ? '無料' : `¥${plan.price}`}
                                            </span>
                                            {plan.price !== '0' && (
                                                <span className="text-dark-400 text-sm">{plan.period}</span>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="mt-8 space-y-3">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={`flex items-start gap-3 text-sm ${plan.comingSoon ? 'text-dark-400' : 'text-dark-200'}`}>
                                            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.comingSoon ? 'text-dark-500' : 'text-accent-500'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    disabled={plan.comingSoon}
                                    className={`mt-8 w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.comingSoon
                                            ? 'bg-dark-600/50 border border-dark-500/30 text-dark-400 cursor-not-allowed'
                                            : plan.popular
                                                ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:-translate-y-0.5'
                                                : 'bg-white/5 border border-white/10 text-dark-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl card-dark">
                        <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="text-sm text-dark-300">
                            ご質問・ご要望は
                            <Link to="/contact" className="text-accent-400 font-medium hover:text-accent-300 hover:underline ml-1">
                                お問い合わせ
                            </Link>
                            からお気軽にどうぞ
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
