import Image from 'next/image'
import Banner from '@/components/Banner'
import placeholder from "@/public/images/stock-guitar.png";
import Hero from '@/components/Hero';
import Spacer from '@/components/Spacer';

export default function Home() {
  return (
    <>
      <Banner />
      <Spacer />
      <Spacer />
      <div className='container'>
          <Hero />
      </div>
    </>
  )
}
