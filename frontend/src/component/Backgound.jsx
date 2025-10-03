import React from 'react'
import back1 from "../assets/hero.jpg"
import back2 from "../assets/hero2.jpg"
import back3 from "../assets/video1.mp4"  // Video file
import back4 from "../assets/video2.mp4"  // Video file

function Backgound({heroCount, setHeroCount}) {
  
    if(heroCount === 0){
        return  <img src={back2} alt="" className='w-[100%] h-[100%]  float-left overflow-auto  object-cover'/>
    }else if(heroCount === 1){
       return  <img src={back1} alt="" className='w-[100%] h-[100%] float-left overflow-auto  object-cover'/>

    }else if(heroCount === 2){
       return  <video 
                 src={back3} 
                 autoPlay 
                 muted 
                 playsInline
                 onEnded={() => {
                   console.log('Video 1 finished playing');
                   setHeroCount(3); // Go to next video
                 }}
                 className='w-[100%] h-[100%] float-left overflow-auto object-cover'
               />

    }else if(heroCount === 3){
       return  <video 
                 src={back4} 
                 autoPlay 
                 muted 
                 playsInline
                 onEnded={() => {
                   console.log('Video 2 finished playing');
                   setHeroCount(0); // Go back to first image
                 }}
                 className='w-[100%] h-[100%] float-left overflow-auto object-cover'
               />

    }
  
}

export default Backgound
