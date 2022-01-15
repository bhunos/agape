import type { NextPage } from 'next'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Divider } from '../components/Divider'
import { Footer } from '../components/footer'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Slider } from '../components/Slider'
import { Subscribe } from '../components/Subscribe'


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Subscribe />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Slider />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  )
}

export default Home
