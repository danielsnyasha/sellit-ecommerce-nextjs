import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
  return (
    <div className="relative">
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
            <div className='rounded-md'>
                <img loading='lazy' src='/images/carousel1.jpg' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/carousel2.jpg' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/carousel3.jpg' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/banner1.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/banner2.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/banner3.png' alt='mee' className='rounded-md'></img>
            </div>

        </Carousel>
    </div>
  )
}

export default Banner 