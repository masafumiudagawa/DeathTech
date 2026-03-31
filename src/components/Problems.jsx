const problems = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: '何にいくら払っているか分からない',
        description:
            '複数のサブスクに加入しているうちに、月々の支払い総額が把握できなくなっていませんか？気づけば使っていないサービスにも毎月課金が続いています。',
        color: 'from-red-500 to-orange-500',
        iconBg: 'bg-red-500/10',
        iconColor: 'text-red-400',
        borderColor: 'hover:border-red-500/30',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: 'ID/パスワードが不明でログインできない',
        description:
            'サービスごとに異なるIDやパスワード。メモを紛失し、ログインできなくなって解約すらできない…そんな経験はありませんか？',
        color: 'from-amber-500 to-yellow-500',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-400',
        borderColor: 'hover:border-amber-500/30',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
        ),
        title: '遺族が請求を止められず困る',
        description:
            '家族が亡くなった後、どんなサービスに加入していたか分からず、請求が続く…。遺族にとってこれほど辛いことはありません。',
        color: 'from-blue-500 to-indigo-500',
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-400',
        borderColor: 'hover:border-blue-500/30',
    },
]

export default function Problems() {
    return (
        <section id="problems" className="relative py-20 lg:py-28 section-light noise-bg overflow-hidden">
            {/* Section divider */}
            <div className="absolute top-0 left-0 w-full section-divider" />
            <div className="absolute bottom-0 left-0 w-full section-divider" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
                        よくある課題
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        こんな<span className="text-red-400">お悩み</span>ありませんか？
                    </h2>
                    <p className="mt-4 text-lg text-dark-300">
                        多くの方が抱えるサブスクリプションに関する問題を解決します
                    </p>
                </div>

                {/* Comic Illustration + Problem Cards */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
                    {/* Comic Panel */}
                    <div className="lg:col-span-2 animate-fade-in-up">
                        <div className="comic-panel">
                            <img
                                src="/images/comic-accident.jpg"
                                alt="突然の事故…家族が困る事態に"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm text-dark-400 italic">
                            突然の事態に備えていますか？
                        </p>
                    </div>

                    {/* Problem Cards */}
                    <div className="lg:col-span-3 space-y-5">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className={`animate-fade-in-up ${index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : ''}`}
                            >
                                <div className={`group relative card-dark rounded-2xl p-6 lg:p-8 ${problem.borderColor}`}>
                                    <div className="flex gap-5">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${problem.iconBg} ${problem.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                            {problem.icon}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {problem.title}
                                            </h3>
                                            <p className="text-dark-300 leading-relaxed text-sm">
                                                {problem.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Gradient Line */}
                                    <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${problem.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
