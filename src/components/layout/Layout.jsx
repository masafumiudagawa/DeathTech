import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
    const { pathname } = useLocation()
    const [pageKey, setPageKey] = useState(pathname)

    useEffect(() => {
        window.scrollTo(0, 0)
        setPageKey(pathname)
    }, [pathname])

    return (
        <div className="min-h-screen bg-dark-900">
            <Header />
            <main key={pageKey} className="page-enter">
                {children}
            </main>
            <Footer />
        </div>
    )
}
