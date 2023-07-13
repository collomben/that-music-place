import Image from 'next/image'
import Banner from '@/components/Banner'
import placeholder from "@/public/images/stock-guitar.png";
import Hero from '@/components/Hero';
import Spacer from '@/components/Spacer';
import BackgroundImage from '@/components/BackgroundImage';
import HeroWithBGImage from '@/components/HeroWithBGImage';
import CTABanner from '@/components/CTABanner';
import lessonsImg from '@/public/images/musiclessons.png';
import kinderMusik from '@/public/images/Kindermusik02.jpg';
import instruments from '@/public/images/Rentals-01.jpg';
import Card from '@/components/Card';

export default function Home()
{
  return (
    <>
      <Banner />
      <HeroWithBGImage />
      <Spacer />
      <Spacer />
      <Spacer />
      <div className='section'>
        <div className='columns-3 container'>
          <Card
            src={lessonsImg}
            title="Music Lessons"
            description="We have a wonderfull staff of teachers who are experienced both as performers and teachers. Now serving over 400 students per week, ages 6 to adult!"
          />
          <Card src={kinderMusik} 
            title="Young Children"
            description="Premier music and movement programs for children newborn to 6 years old. Parent and child classes newborn - 2 years, 3-4 year olds learn music concepts, 5-6 year olds learn to read music and play an instrument in a fun group setting."
          />
          <Card src={instruments} 
            title="Instrument Rental"
            description="Our instruments are approved by the local school districts. Competitive rates, no interest, and no long term commitment. Reserve your school band or orchestra instrument today!"
          />
        </div>
      </div>
    </>
  )
}
