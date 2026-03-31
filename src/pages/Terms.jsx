import { Link } from 'react-router-dom'

const sections = [
    {
        title: '第1条（適用）',
        content: [
            '本規約は、DeathTech株式会社（以下「当社」といいます）が提供するサブスクリプション管理サービス「サブスクカッター」（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用するすべてのお客様（以下「会員」といいます）と当社との間で定めるものです。',
            '会員は、本規約に同意した上で、本サービスを利用するものとします。',
        ],
    },
    {
        title: '第2条（会員登録）',
        content: [
            '本サービスの利用を希望する方は、当社が定める方法により会員登録を行うものとします。',
            '当社は、以下の場合に会員登録を拒否することがあります。',
        ],
        list: [
            '登録情報に虚偽、誤記または記載漏れがあった場合',
            '過去に本規約に違反したことがある場合',
            'その他当社が会員登録を適当でないと判断した場合',
        ],
    },
    {
        title: '第3条（アカウント管理）',
        content: [
            '会員は、自己の責任においてアカウント情報（メールアドレス、パスワード等）を管理するものとします。',
            '会員は、アカウント情報を第三者に利用させ、または貸与、譲渡、売買、質入等をしてはならないものとします。',
            'アカウント情報の管理不十分、第三者の使用等による損害の責任は会員が負うものとし、当社は一切の責任を負いません。',
        ],
    },
    {
        title: '第4条（利用料金）',
        content: [
            '会員は、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。',
            '会員が利用料金の支払を遅滞した場合には、会員は年14.6%の割合による遅延損害金を支払うものとします。',
        ],
    },
    {
        title: '第5条（禁止事項）',
        content: ['会員は、本サービスの利用にあたり、以下の行為をしてはなりません。'],
        list: [
            '法令または公序良俗に違反する行為',
            '犯罪行為に関連する行為',
            '当社のサービスの運営を妨害するおそれのある行為',
            '他の会員に関する個人情報等を収集または蓄積する行為',
            '他の会員に成りすます行為',
            '当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為',
            '当社、他の会員、または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為',
            'その他、当社が不適切と判断する行為',
        ],
    },
    {
        title: '第6条（本サービスの提供の停止等）',
        content: [
            '当社は、以下のいずれかの事由があると判断した場合、会員に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。',
        ],
        list: [
            '本サービスにかかるコンピュータシステムの保守点検または更新を行う場合',
            '地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合',
            'コンピュータまたは通信回線等が事故により停止した場合',
            'その他、当社が本サービスの提供が困難と判断した場合',
        ],
    },
    {
        title: '第7条（退会）',
        content: [
            '会員は、当社の定める手続により、いつでも退会することができます。',
            '退会後、当社は会員のデータを一定期間保持した後、安全に削除いたします。',
        ],
    },
    {
        title: '第8条（個人情報の取扱い）',
        content: [
            '当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。',
        ],
    },
    {
        title: '第9条（免責事項）',
        content: [
            '当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。',
            '当社は、本サービスに起因して会員に生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。',
        ],
    },
    {
        title: '第10条（規約の変更）',
        content: [
            '当社は、必要と判断した場合には、会員に通知することなくいつでも本規約を変更することができるものとします。',
            '変更後の利用規約は、当社ウェブサイトに掲示した時点から効力を生じるものとします。',
        ],
    },
    {
        title: '第11条（準拠法・裁判管轄）',
        content: [
            '本規約の解釈にあたっては、日本法を準拠法とします。',
            '本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
        ],
    },
]

export default function Terms() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-16 lg:py-20 overflow-hidden page-hero">
                <div className="absolute inset-0 bg-dark-900" />
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-600/5 blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                        Legal
                    </span>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                        会員<span className="gradient-text">規約</span>
                    </h1>
                    <p className="text-dark-400 text-sm">最終更新日: 2026年3月1日</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 lg:py-16 section-light noise-bg">
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card-dark rounded-2xl p-8 sm:p-12 space-y-10">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-dark-300 text-sm leading-relaxed mb-3">
                                        {paragraph}
                                    </p>
                                ))}
                                {section.list && (
                                    <ul className="mt-3 space-y-2 ml-4">
                                        {section.list.map((item, lIndex) => (
                                            <li key={lIndex} className="flex items-start gap-2 text-sm text-dark-300">
                                                <span className="text-accent-500 mt-1.5 flex-shrink-0">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                                                        <circle cx="4" cy="4" r="3" />
                                                    </svg>
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-accent-400 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            トップページに戻る
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
