import React from 'react'
import ReviewCard from './ReviewCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
    
    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div className='bg-black pb-10 pt-10'>
        <h1 className='text-white text-center font-bold text-3xl'>Our Testimonials</h1>
 <div className="flex flex-row justify-center items-center " >
      <Carousel   responsive={responsive} className="w-[1500px] h-[470px]"  arrows={false} showDots={true} transitionDuration={100}  infinite={true} autoPlay={true} autoPlaySpeed={5000} >
        
        <div>
         <ReviewCard />
        </div>
        <div>
        <ReviewCard />
        </div>
        <div>
        <ReviewCard />
        </div>
        <div>
        <ReviewCard />
        </div>
        
      </Carousel>
    </div>
    </div>
   
  )
}

export default Reviews