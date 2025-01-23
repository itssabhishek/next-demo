import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrendingSection from '@/components/TrendingSection'
import LearnMore from '@/components/LearnMore'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrendingSection />
      <LearnMore />
      <Footer />
    </main>
  )
}
