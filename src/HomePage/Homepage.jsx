import React from 'react'
import Header from './Header'
import ImgSection from './ImgSection'
import Ourdomain from './Ourdomain'
import Deliver from './Deliver'
import Testimonial from './Testimonial'
import { Footer } from './Footer'

const Homepage = () => {
    return (
        <>
            {/* <Header /> */}
            <ImgSection />
            <Ourdomain />
            <Deliver />
            <Testimonial />
            <Footer/>
        </>
    )
}

export default Homepage
