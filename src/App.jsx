import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
