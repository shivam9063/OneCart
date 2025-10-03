import React, { useEffect, useState } from 'react'
import Backgound from '../component/Backgound'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'


function Home() {
  let heroData=[
    {text1:"30% OFF Limited Offer",text2:"Style that"},
    {text1:"Discover the Best of Bold Fashion",text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection ",text2:"Shop Now!"},
    {text1:"Choose your Perfect Fasion Fit",text2:"Now on Sale!"}
  ]

  let [heroCount,setHeroCount] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=>{
      setHeroCount(prevCount => {
        // Normal progression: 0 -> 1 -> 2 -> 3 -> 0
        // But for video slides (2 and 3), we'll handle separately
        if(prevCount === 0) return 1;
        if(prevCount === 1) return 2;  // Go to first video
        if(prevCount === 2) return 2;  // Stay on video, don't auto-change
        if(prevCount === 3) return 3;  // Stay on video, don't auto-change
        return 0; // fallback
      });
    },3000);
    return () => clearInterval(interval)
  },[])
  
  return (
    <div className='overflow-x-hidden relative top-[70px]'>
    <div className=' w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh]   bg-gradient-to-l from-[#141414] to-[#0c2025] '>

      <Backgound heroCount={heroCount} setHeroCount={setHeroCount}/>
      <Hero
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      />


     
    </div>
    <Product/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
    </div>
  )
}

export default Home
