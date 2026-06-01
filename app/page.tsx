import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Categories from '@/components/Categories'
import Comparison from '@/components/Comparison'
import SocialProof from '@/components/SocialProof'
import ForWhom from '@/components/ForWhom'
import Pricing from '@/components/Pricing'
import Trust from '@/components/Trust'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Categories />
      <Comparison />
      <SocialProof />
      <ForWhom />
      <Pricing />
      <Trust />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
