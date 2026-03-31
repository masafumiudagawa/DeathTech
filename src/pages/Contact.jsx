import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
    'サービスに関するご質問',
    '料金・お支払いについて',
    '機能のご要望',
    '不具合のご報告',
    '法人・パートナーシップのご相談',
    'その他',
]

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1500)
    }

    if (isSubmitted) {
        return (
            <div className="pt-20">
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900" />
                    <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px]" />
                    <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

                    <div className="relative max-w-lg mx-auto px-4 text-center animate-fade-in-up">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-extrabold text-white mb-4">
                            送信<span className="gradient-text">完了</span>
                        </h1>
                        <p className="text-dark-300 leading-relaxed mb-8">
                            お問い合わせいただきありがとうございます。<br />
                            内容を確認の上、2営業日以内にご連絡いたします。
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-2xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            トップページに戻る
                        </Link>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-16 lg:py-20 overflow-hidden page-hero">
                <div className="absolute inset-0 section-dark" />
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-600/5 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-500/5 blur-[100px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                        Contact
                    </span>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                        お<span className="gradient-text">問い合わせ</span>
                    </h1>
                    <p className="text-dark-300 max-w-xl mx-auto">
                        サービスに関するご質問やご要望がございましたら、お気軽にお問い合わせください。
                        2営業日以内にご返信いたします。
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="py-12 lg:py-16 section-light noise-bg">
                <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-8 sm:p-12 space-y-8">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-dark-200 mb-2">
                                お名前 <span className="text-accent-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="山田 太郎"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-dark-200 mb-2">
                                メールアドレス <span className="text-accent-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-semibold text-dark-200 mb-2">
                                お問い合わせ種別 <span className="text-accent-500">*</span>
                            </label>
                            <select
                                id="category"
                                name="category"
                                required
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all appearance-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px',
                                }}
                            >
                                <option value="" disabled className="bg-dark-700">選択してください</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat} className="bg-dark-700">{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-dark-200 mb-2">
                                お問い合わせ内容 <span className="text-accent-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="お問い合わせ内容をご記入ください..."
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-dark-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all resize-none"
                            />
                        </div>

                        {/* Privacy notice */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                required
                                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-accent-500 focus:ring-accent-500/50"
                            />
                            <label htmlFor="privacy" className="text-sm text-dark-400">
                                <Link to="/privacy" className="text-accent-400 hover:text-accent-300 hover:underline">
                                    プライバシーポリシー
                                </Link>
                                に同意の上、送信してください
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? (
                                <span className="inline-flex items-center gap-2">
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    送信中...
                                </span>
                            ) : (
                                '送信する'
                            )}
                        </button>
                    </form>

                    {/* Alternative contact */}
                    <div className="mt-10 text-center">
                        <p className="text-dark-400 text-sm mb-2">メールでのお問い合わせ</p>
                        <a
                            href="mailto:info@deathtech.jp"
                            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            info@deathtech.jp
                        </a>
                    </div>

                    <div className="mt-8 text-center">
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
