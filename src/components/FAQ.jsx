import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
    {
        question: 'サブスクカッターとは何ですか？',
        answer:
            'サブスクカッターは、あなたが加入しているサブスクリプションサービス（Netflix、Spotify、各種SaaSなど）のID・パスワード・支払い情報を一元管理するサービスです。更新前の通知機能に加え、万が一の際にご家族へ情報を引き継ぐ機能も備えています。',
    },
    {
        question: '無料で使えますか？',
        answer:
            'はい、無料プランをご用意しています。サブスク3件までの登録と基本的な管理機能、メール通知がご利用いただけます。より多くのサブスクを管理したい場合や、家族への情報共有機能をご利用になりたい場合は、有料プランへのアップグレードをご検討ください。',
    },
    {
        question: '家族への情報共有はどのように行われますか？',
        answer:
            'ファミリープランでは、あらかじめ指定したご家族に「緊急時アクセス」の権限を設定できます。万が一の際、指定されたご家族がサブスク情報にアクセスし、不要な請求を止めることができます。通常時のアクセスは制限されておりますので、プライバシーも保護されます。',
    },
    {
        question: 'セキュリティは大丈夫ですか？',
        answer:
            'お客様の情報は業界標準の暗号化技術（AES-256）で保護されています。また、二段階認証にも対応しており、不正アクセスのリスクを最小限に抑えています。サーバーは国内のセキュアなデータセンターで運用しています。',
    },
    {
        question: '解約はいつでもできますか？',
        answer:
            'はい、有料プランはいつでも解約可能です。解約後は自動的に無料プランに切り替わります。解約金やペナルティは一切ございません。解約はマイページからワンクリックで手続きできます。',
    },
    {
        question: 'どのようなサブスクに対応していますか？',
        answer:
            '動画配信（Netflix, Amazon Prime等）、音楽配信（Spotify, Apple Music等）、クラウドストレージ、SaaS、ジム会費、新聞・雑誌の定期購読など、あらゆるサブスクリプションサービスを登録・管理できます。手動で自由に追加できるため、対応範囲に制限はありません。',
    },
]

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 px-1 text-left group"
            >
                <span className="text-base font-medium text-dark-100 group-hover:text-accent-400 transition-colors pr-4">
                    {faq.question}
                </span>
                <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                            ? 'bg-accent-500/20 text-accent-400 rotate-180'
                            : 'bg-white/5 text-dark-400 group-hover:bg-accent-500/10 group-hover:text-accent-400'
                        }`}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
            >
                <p className="text-dark-300 leading-relaxed px-1">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="faq" className="relative py-20 lg:py-28 section-dark">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/3 blur-[120px]" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        よくある<span className="gradient-text">ご質問</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-300">
                        お客様からよくいただくご質問をまとめました
                    </p>
                </div>

                {/* FAQ List */}
                <div className="card-dark rounded-2xl p-6 sm:p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-dark-400 mb-4">
                        その他のご質問はお気軽にお問い合わせください
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </section>
    )
}
