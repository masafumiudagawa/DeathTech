import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="min-h-screen bg-dark-900">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
