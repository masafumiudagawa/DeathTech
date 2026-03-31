const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
        title: 'サブスクの一元管理',
        description:
            'すべてのサブスクリプションを一つの画面で管理。月額・年額の支払い、利用状況を一目で把握できます。',
        highlight: '一目で全体を把握',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
        ),
        title: '更新前の通知アラート',
        description:
            'サブスクの更新日が近づくと自動で通知。「気づいたら更新されていた…」を無くします。',
        highlight: '解約忘れをゼロに',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: '家族への情報共有',
        description:
            '万が一の際に、ご家族が登録情報にアクセスできる仕組み。大切な人を不要な請求から守ります。',
        highlight: '家族を守る安心機能',
    },
]

export default function Solutions() {
    return (
        <section id="solutions" className="relative py-20 lg:py-28 section-dark overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        サブスクカッターの機能
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        <span className="gradient-text">3つの機能</span>で安心を届ける
                    </h2>
                    <p className="mt-4 text-lg text-dark-300">
                        覚えておく煩わしさ、解約し忘れ、家族への万が一の愛情をサポートします
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
                    {/* Feature Cards */}
                    <div className="lg:col-span-3 space-y-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`animate-fade-in-up ${index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : ''}`}
                            >
                                <div className="group flex gap-5 p-6 rounded-2xl card-dark hover:border-primary-500/20">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-accent-500/30 transition-all duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-dark-300 text-sm leading-relaxed mb-3">
                                            {feature.description}
                                        </p>
                                        <span className="inline-flex items-center text-xs font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full">
                                            {feature.highlight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comic Panel */}
                    <div className="lg:col-span-2 order-first lg:order-last animate-fade-in-up animation-delay-200">
                        <div className="comic-panel">
                            <img
                                src="/images/comic-family.jpg"
                                alt="サブスクカッターで家族も安心"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-5 speech-bubble">
                            <p className="text-sm text-dark-200 leading-relaxed">
                                <span className="text-accent-400 font-bold">「これなら、もしもの時も安心ね」</span>
                                <br />
                                サブスク管理は、今からでも遅くない！
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
