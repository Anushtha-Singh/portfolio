import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import CourseWork from '@/components/CourseWork'
import CodingProfiles from '@/components/CodingProfiles'
import Footer from '@/components/Footer'



export default function Home() {
  return(
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <CourseWork />
      <CodingProfiles />
      <Footer />
    </main>
  )
}