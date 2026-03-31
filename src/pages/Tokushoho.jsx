import { Link } from 'react-router-dom'

const rows = [
    ['販売業者', 'DeathTech株式会社'],
    ['代表責任者', '代表取締役'],
    ['所在地', '東京都渋谷区'],
    ['電話番号', 'お問い合わせフォームよりご連絡ください'],
    ['メールアドレス', 'info@deathtech.jp'],
    ['URL', 'https://death-tech.vercel.app'],
    ['商品の名称', 'サブスクカッター（サブスクリプション管理サービス）'],
    ['販売価格', [
        '無料プラン: 0円/月',
        'スタンダードプラン: 480円/月（税込）',
        'ファミリープラン: 780円/月（税込）',
    ]],
    ['商品代金以外の必要料金', 'インターネット接続料金、通信料金等はお客様のご負担となります'],
    ['支払方法', 'クレジットカード決済'],
    ['支払時期', '申込時に初回決済、以降毎月自動決済'],
    ['商品の引渡時期', 'お申込み手続き完了後、直ちにサービスをご利用いただけます'],
    ['返品・キャンセル', [
        '月額サービスのため、返品はお受けしておりません。',
        'いつでも解約が可能です。解約後は次回更新日をもってサービスが停止し、自動的に無料プランに切り替わります。',
        '解約に伴う違約金・解約金はございません。',
        '日割り計算による返金は行っておりません。',
    ]],
    ['動作環境', [
        'Google Chrome（最新版）',
        'Mozilla Firefox（最新版）',
        'Safari（最新版）',
        'Microsoft Edge（最新版）',
        '※上記以外のブラウザでは正常に動作しない場合があります',
    ]],
    ['特別条件', '未成年者の方は、保護者の同意を得た上でご利用ください'],
]

export default function Tokushoho() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-16 lg:py-20 overflow-hidden page-hero">
                <div className="absolute inset-0 bg-dark-900" />
                <div className="absolute top-0 left-1/2 w-[400px] h-[400px] rounded-full bg-primary-600/5 blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                        Legal
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                        特定商取引法に基づく<span className="gradient-text">表記</span>
                    </h1>
                    <p className="text-dark-400 text-sm">最終更新日: 2026年3月1日</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 lg:py-16 section-light noise-bg">
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card-dark rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {rows.map(([label, value], index) => (
                                    <tr key={index} className="border-b border-white/5 last:border-0">
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-dark-200 w-1/3 bg-white/[0.02] align-top">
                                            {label}
                                        </th>
                                        <td className="px-6 py-5 text-sm text-dark-300 align-top">
                                            {Array.isArray(value) ? (
                                                <ul className="space-y-1.5">
                                                    {value.map((item, vIndex) => (
                                                        <li key={vIndex} className="flex items-start gap-2">
                                                            <span className="text-accent-500 mt-1.5 flex-shrink-0">
                                                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8">
                                                                    <circle cx="4" cy="4" r="3" />
                                                                </svg>
                                                            </span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : label === 'メールアドレス' ? (
                                                <a href={`mailto:${value}`} className="text-accent-400 hover:text-accent-300 hover:underline">
                                                    {value}
                                                </a>
                                            ) : label === 'URL' ? (
                                                <a href={value} target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 hover:underline">
                                                    {value}
                                                </a>
                                            ) : (
                                                value
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
