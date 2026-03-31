import { Link } from 'react-router-dom'

const sections = [
    {
        title: '1. 個人情報の収集',
        content: '当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります。',
        list: [
            '氏名、メールアドレス等の基本情報',
            'サブスクリプションサービスに関する情報（サービス名、契約日、料金等）',
            '決済に必要な情報（クレジットカード情報等、決済代行会社を通じて処理されます）',
            '本サービスの利用状況に関する情報（アクセスログ、利用機能等）',
            '端末情報（OS、ブラウザ、IPアドレス等）',
            '家族共有機能において登録された家族の連絡先情報',
        ],
    },
    {
        title: '2. 個人情報の利用目的',
        content: '当社は、収集した個人情報を以下の目的で利用いたします。',
        list: [
            '本サービスの提供、運営、維持および改善',
            '会員の本人確認およびアカウント管理',
            'サブスクリプション更新通知等のアラート送信',
            '家族への情報共有機能の提供',
            '利用料金の請求および決済処理',
            'お問い合わせへの対応',
            '本サービスに関するお知らせの送信',
            '利用状況の分析およびサービス改善',
            '不正利用の防止およびセキュリティの確保',
        ],
    },
    {
        title: '3. データの保護',
        content: '当社は、お客様の個人情報を適切に保護するため、以下のセキュリティ対策を実施しています。',
        list: [
            'AES-256による暗号化技術を用いたデータの保存',
            'SSL/TLS通信による通信の暗号化',
            '二段階認証への対応',
            'アクセス権限の厳格な管理',
            '定期的なセキュリティ監査の実施',
            '国内のセキュアなデータセンターでのサーバー運用',
        ],
    },
    {
        title: '4. 個人情報の第三者提供',
        content: '当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。',
        list: [
            'お客様の同意がある場合',
            '法令に基づき開示が求められた場合',
            '人の生命、身体または財産の保護のために必要であって、お客様の同意を得ることが困難な場合',
            '本サービスの運営に必要な範囲で業務委託先に提供する場合（適切な監督の下で行います）',
            '家族共有機能において、お客様が指定した家族に対して情報を共有する場合',
        ],
    },
    {
        title: '5. Cookieの利用',
        content: '当社は、本サービスにおいてCookieを利用しています。Cookieは、サービスの利便性向上、利用状況の分析に使用されます。会員は、ブラウザの設定によりCookieの受信を拒否することができますが、本サービスの一部機能が利用できなくなる場合があります。',
    },
    {
        title: '6. 個人情報の開示・訂正・削除',
        content: '会員は、当社に対して、ご自身の個人情報の開示、訂正、追加、削除、利用停止を求めることができます。本人確認の上、速やかに対応いたします。マイページからの操作、またはお問い合わせ窓口（info@deathtech.jp）からご連絡ください。',
    },
    {
        title: '7. データの保持期間',
        content: '当社は、利用目的に必要な範囲内で個人情報を保持します。退会された場合は、退会日から90日以内に個人情報を安全に削除いたします。ただし、法令により保持が義務付けられている情報については、法定の保持期間が経過するまで保持いたします。',
    },
    {
        title: '8. 緊急時アクセス機能について',
        content: 'ファミリープランの「緊急時アクセス」機能は、会員が事前に指定した家族に対して、所定の条件のもとでサブスクリプション情報へのアクセスを許可する機能です。この機能の利用にあたっては、会員自身が共有範囲を設定し、管理するものとします。',
    },
    {
        title: '9. プライバシーポリシーの変更',
        content: '当社は、法令の改正やサービスの変更に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲示した時点から効力を生じます。重要な変更がある場合は、メール等でお知らせいたします。',
    },
    {
        title: '10. お問い合わせ',
        content: '個人情報の取扱いに関するお問い合わせは、以下の窓口までお願いいたします。',
        extra: [
            'DeathTech株式会社 個人情報保護管理者',
            'メールアドレス: info@deathtech.jp',
        ],
    },
]

export default function Privacy() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-16 lg:py-20 overflow-hidden page-hero">
                <div className="absolute inset-0 bg-dark-900" />
                <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                        Legal
                    </span>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                        プライバシー<span className="gradient-text">ポリシー</span>
                    </h1>
                    <p className="text-dark-400 text-sm">最終更新日: 2026年3月1日</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 lg:py-16 section-light noise-bg">
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card-dark rounded-2xl p-8 sm:p-12">
                        <p className="text-dark-300 text-sm leading-relaxed mb-10">
                            DeathTech株式会社（以下「当社」といいます）は、本サービス「サブスクカッター」の利用者の個人情報を適切に保護することが社会的責務であると考え、以下のプライバシーポリシーに基づき個人情報の保護に努めます。
                        </p>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <div key={index}>
                                    <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
                                    <p className="text-dark-300 text-sm leading-relaxed mb-3">
                                        {section.content}
                                    </p>
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
                                    {section.extra && (
                                        <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                            {section.extra.map((line, eIndex) => (
                                                <p key={eIndex} className="text-sm text-dark-300">{line}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
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
