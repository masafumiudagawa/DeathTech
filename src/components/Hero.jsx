export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-300/20 blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                            サブスク管理サービス
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-slate-900 leading-tight tracking-tight">
                            忘れてしまう無駄な支払い、
                            <br />
                            <span className="gradient-text">悲しむ遺族に追い打ちをかける</span>
                            <br />
                            理不尽を<span className="text-accent-500">無くす</span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                            サブスクカッターは、あなたのサブスクリプション情報を一元管理し、
                            更新タイミングでの通知、万が一の際に家族へ情報を引き継ぐことが
                            できるサービスです。
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl hover:from-primary-700 hover:to-primary-600 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                無料で始める
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="#solutions"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                            >
                                詳しく見る
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                無料プランあり
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                簡単セットアップ
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                安心のセキュリティ
                            </div>
                        </div>
                    </div>

                    {/* Hero Image - App Mockup */}
                    <div className="relative animate-fade-in-up animation-delay-200">
                        <div className="relative mx-auto w-full max-w-md">
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400/20 rounded-3xl rotate-12 animate-float" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />

                            {/* Phone Mockup */}
                            <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/30">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
                                <div className="rounded-[2rem] overflow-hidden bg-white">
                                    <img
                                        src="/images/hero-app.webp"
                                        alt="サブスクカッター管理画面"
                                        className="w-full h-auto"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
