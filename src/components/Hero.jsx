export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-900" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/8 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-900/20 blur-[150px]" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                            サブスク管理サービス
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-tight tracking-tight">
                            忘れてしまう無駄な支払い、
                            <br />
                            <span className="gradient-text">悲しむ遺族に追い打ちをかける</span>
                            <br />
                            理不尽を<span className="text-accent-500">無くす</span>
                        </h1>

                        <p className="mt-6 text-lg text-dark-300 leading-relaxed max-w-xl">
                            サブスクカッターは、あなたのサブスクリプション情報を一元管理し、
                            更新タイミングでの通知、万が一の際に家族へ情報を引き継ぐことが
                            できるサービスです。
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl hover:from-primary-500 hover:to-accent-400 shadow-xl shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                無料で始める
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="#solutions"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark-200 bg-white/5 border border-white/10 rounded-2xl hover:border-accent-500/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                            >
                                詳しく見る
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex items-center gap-6 text-sm text-dark-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                無料プランあり
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                簡単セットアップ
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                安心のセキュリティ
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual - Logo 3D */}
                    <div className="relative animate-fade-in-up animation-delay-200">
                        <div className="relative mx-auto w-full max-w-md">
                            {/* Decorative glows */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-500/15 rounded-full blur-2xl animate-pulse-glow" />
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500/15 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

                            {/* Main visual */}
                            <div className="relative rounded-3xl overflow-hidden glow-mixed animate-float">
                                <img
                                    src="/images/logo-3d-vertical.jpg"
                                    alt="DeathTech"
                                    className="w-full h-auto rounded-3xl"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
