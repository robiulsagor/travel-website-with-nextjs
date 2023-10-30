import App from '@/components/App'
import Camp from '@/components/Camp'
import Features from '@/components/Features'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <App />
    </div>
  )
}
