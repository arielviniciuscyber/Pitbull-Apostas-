import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Social from './components/Social'
import Metrics from './components/Metrics'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function App() {
  return (
    <>
      <Particles />
      <Header />
      <main>
        <Hero />
        <About />
        <Social />
        <Metrics />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
