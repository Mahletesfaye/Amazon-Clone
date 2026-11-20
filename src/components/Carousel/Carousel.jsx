import React from 'react'
import { Carousel } from '@camfolio/react-responsive-carousel'
import {img} from './img.js'

function CarouselEffect() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={true}
        >
            {
                img.map((imageItemLink)=>{
                    return <img src={imageItemLink}/>
                })
            }

        </Carousel>
    </div>
        )
    }

export default CarouselEffect