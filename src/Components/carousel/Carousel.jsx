import React, {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./Carousel.css"

const Carousel = ({data}) => {
  const [slide, setslide] = useState(0);

  const nextSlide =() =>{
    setslide(slide === data.length -1 ? 0:slide+1)
  }
  const prevSlide=() =>{
    setslide(slide === 0 ? data.length-1:slide-1)
  }
  return (
    
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} title={item.title} key={idx} className={ slide === idx ? "slides":"slide slide-hidden"}/>
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {data.map((_, idx)=>{
          return <button key={idx} onClick={()=> setslide(idx)} className={slide === idx ? "indicator":"indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel