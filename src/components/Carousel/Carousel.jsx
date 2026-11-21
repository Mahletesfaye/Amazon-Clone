import React from 'react'
import { Carousel } from '@camfolio/react-responsive-carousel'
import {img} from './img/data'
function Carousel() {
  return (
    <div>
        <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={true}
                showThumbs={true}
        >
    

        </Carousel>

    </div>
  )
}

export default Carousel