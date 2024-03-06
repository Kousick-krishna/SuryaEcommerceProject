import React, { useState,useEffect } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";


export const Carousel = () => {
    const [slide,setSlide] = useState(0);
    const prevslide = () => {
        setSlide(slide === 0 ? data.length -1 : slide-1)
    }
    const nextslide = () =>{
        setSlide(slide === data.length -1 ? 0 : slide+1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextslide();
        }, 3000); // Change the interval as needed, here it's set to switch every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [slide,data.length]);
  return (
      <div className="flex w-[4980px] fixed mt-10">
        {data.map((d,idx) =>{
            return (
                <>
                <BsArrowLeftCircleFill className="absolute w-8 h-8 ml-3 mt-44" onClick={prevslide}/>
                <img src={d.img} alt={d.alt} key={idx} className={slide === idx ? "w-[2000px] h-96 object-cover overflow-hidden" : "hidden"}/>
                <BsArrowRightCircleFill className="absolute w-8 h-8 ml-[1610px] mt-44" onClick={nextslide}/>
                </>
               
            )
            
        })}
      </div>
  )
};

const data = [
    {
        img : "src/assets/cable1.jpg",
        alt : "cable1"
    },
    {
        img : "src/assets/cable2.jpg",
        alt : "cable2"
    },
    {
        img : "src/assets/cable3.jpg",
        alt : "cable3"
    },
]