import Camp from '@/components/Camp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
    </div>
  )
}
