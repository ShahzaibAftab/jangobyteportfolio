import React, { useEffect, useState } from 'react'
import homepageImage from './Homepage.jpg'
import { useSpring, animated, useTrail } from 'react-spring';
import TypingEffect from 'react-typing-effect';
import Header from './Header';

const TextTypingAnimation = ({ text }) => {
    return (
        <h1 style={{ fontSize: '75px', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
            <TypingEffect
                text={text}
                speed={100} // You can adjust the speed of typing animation
                eraseSpeed={100} // You can adjust the speed of erasing animation (optional)
                eraseDelay={2000000} // You can adjust the delay before erasing (optional)
            />
        </h1>
    );
};


const NumberCounter = ({ targetNumber }) => {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: targetNumber },
        config: { duration: 3000 }, // You can adjust the duration to control the animation speed
    });

    return (
        <animated.span>
            {number.interpolate((val) => Math.floor(val))}
        </animated.span>
    );
};
const ImgSection = () => {
    return (
        <div className='img-setting' style={{ backgroundImage: `url(${homepageImage})` }}>
            <div className='container'>
                <Header />
            </div>
            <div className='container'>
                <div className='row  d-flex justify-content-center'>
                    <div className='col-6 text-white' style={{ marginTop: '50px' }}>
                        <div>
                            <TextTypingAnimation text="Take your ideas to a futuristic level" />
                        </div>
                        <p>Wanna Get free Qoute?<a className='text-warning' style={{ marginLeft: '10px', textDecoration: 'underline', fontStyle: 'italic' }} href='#'>Consult our Experts</a></p>
                        <button
                            style={{
                                marginLeft: '100px',
                                marginTop: '20px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add the box shadow
                            }}
                            className='px-3 py-3 btn btn-secondary'
                        >
                            Book an appointment
                        </button>

                    </div>
                    <div className='col-6' style={{ paddingTop: '350px' }}>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='text-white' style={{ fontSize: '25px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Success Rate<br /> <span className='mt-2' style={{ fontSize: '45px' }}> <NumberCounter targetNumber={99} />. <NumberCounter targetNumber={9} />%</span></h6>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='text-white' style={{ fontSize: '25px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Projects <br /> <span className='mt-2' style={{ fontSize: '45px' }}> <NumberCounter targetNumber={50} />+</span></h6>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='text-white' style={{ fontSize: '25px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Happy Clients <br /> <span className='mt-2' style={{ fontSize: '45px' }}> <NumberCounter targetNumber={200} />+</span></h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ImgSection
